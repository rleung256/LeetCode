https://leetcode.com/discuss/interview-question/system-design/496042/Design-video-sharing-platform-like-Youtube

Problem: Design video sharing platform like Youtube

Key points:
-as always remember to go where your interviewer asks you to focus on.
-questions to ask:
    -ask about MVP...what features do we need to focus on?
    -what are the users of the system?
    -how will users engage with the system?
    -are there external dependencies(auth)?
-functional reqs:
    -users watch vids
    -users can upload their vids
-non functional reqs:
    -highly available
    -users in different regions should have same latency
    -as users increase platform should account for that
-Design goals:
    Latency - Is our service latency sensitive (Or in other words, Are requests with high latency and a failing request, equally bad?)
    Yes, to provide great customer experience, latency is very important for video service

    Consistency - Does our service require tight consistency?
    Not really, it's okay if things are eventually consistent.

    Availability - Does this problem require 100% availability?
    Yes

api design:
-rest:

POST    videos
		Request header
			Content-Type: multipart/form-data
		Request body
			userID
			videoTitle
			videoDescription
			language
			videoFile binary data
		Response body
			videoProcessingJobID

Using HTTP POST to upload a bianry file is not as simple as we expect. The Content-Type has to be multipart/form-data and the video file binary data will be included between boundary parameters. I'm not going to cover technical details at here. And also, we can even split the big video file and upload chunks in parallel. Again, that's implementation details.



GET /v1/videos/<videoID>
		Request header
			access_token
		Response body
			videoURL

As we learned earlier, authentication and authorization is out of the scope of this problem. I simply add the access_token to the request header. Idealy, once the user is done authentication during login, an id_token or access_token (depends on the OIDC flow that the authentication flow is using) would be issued to the user and it'll be passed to backend, decoded and validated there.

POST /v1/users
	Request body
		userName
		region
		age
	Response body
		userID
GET /v1/users/<userID>
	Request header
		access_token
	Response body
		userID
		userName
		region
		age


design:
upload video
user upload video, once the upload is done, create a job and put it into the video post processing queue and return the job id to client for future progress checking
our service picks up job from the queue and conducts a serise processing, e.g. check duplication, compression
once post-processign is done, persist video in object storage (e.g. AWS S3 bucket)
persist video metadata (including video URL in S3 bucket)
watch video
user sends request to access a video by videoID
server return the URL of the requested video




DB: 
dynamo nosql...s3 for vids

For NoSQL database, especially DynamoDB, we first identify access patterns. And then, design database schema and denormalize data if it's necessary. DynamoDB provides excellent scalability at the the cost of less access flexibility. DynamoDB recommends putting all entites into one table with carefully designed partition key and optional sort key. In case we want to support new access pattern in future, we can add GSI (Global Secondary Index) to DynamoDB, we do have flexibility to some extent.

The access patterns we'll support are

given a videoID, access the video
given a userID, access the user info
given a userID, access all videos that are uploaded by the user

   *Entity*                              *Partition Key*             *Sort Key*
	Video                                #VIDEO#<VideoID>         #METADATA#<VideoID>
	User                                 #USER#<UserID>           #METADATA#<UserID> 
	UserVideoMapping                     #USER#<VideoID>         #VIDEO#<VideoID>



detailed design:
How to scale the architecture? Ideally, before making any decisions about scaling, we should first do performance tests against our system, monitor CPU and memory usage and latency and find the bottleneck. At here, I just assume our services will be running into common problems as other data intensive application scales.

Servers and database are usually bottlenecks while visitors are increasing. Cahce can significantly reduce the presessure to servers and databases; hence, improve the scalability

use CDN (AWS Cloudfront) to serve static resources, including videos, video thumbnails ...
use cache (AWS DAX) for user info and video metadata access

Besides that, since I'm using DynamoDB, a managed service, as the database storage, it does all the heavy lifting for us, e.g. master-slave replication, multi-master writes, etc.. All we need to do is to setup proper auto scale settings.

better pic in link at the top
client->api gateway -> load balancer -> VIDEO service -> video metadata dynamo, s3 bucket
                    -> load balancer -> USER service  -> user info dynamo

3/19/23
Takeaways:
-looking at how the methods are created helped me alot here... didnt even think about content type at times.
-measuring cpu and memory usage is a cool idea.
-api gateway is a cool idea...remember load balanced in front of each service
-learn more about how dynamo db works