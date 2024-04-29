import express from 'express';
import * as tweetcontroller from '../controller/tweet.js';
const router = express.Router();



// 해당 아이디에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets?username=:username
router.get('/', tweetcontroller.getTweets);


// 글 번호에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets/:id
router.get('/:id', tweetcontroller.getTweet);


// 트윗하기
// POST
// http://localhost:8080/tweets
// name, username, text를 받아서 글을 등록 
// json형태로 입력 후 추가된 데이터까지 모두 json으로 출력
router.post('/', tweetcontroller.createTweet);




// 트윗 수정하기
// PUT
// http://localhost:8080/tweets/:id
// id, username, text를 받아서 글을 수정
// json형태로 입력 후 변경된 데이터까지 모두 json으로 출력
router.put('/:id', tweetcontroller.updateTweet);


// 트윗 삭제하기
// DELETE
// http://localhost:8080/tweets/:id
router.delete('/:id', tweetcontroller.deleteTweet);


export default router;