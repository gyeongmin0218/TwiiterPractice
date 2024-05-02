
let tweets = [
    {
        id:'1',
        text: '안녕하세요!',
        createAt: Date.now().toString(),
        name:'김사과',
        username:'apple',
        url: 'https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45.jpg'
    },
    {
        id:'2',
        text: '반갑습니다!',
        createAt: Date.now().toString(),
        name: '반하나',
        username: 'banana',
        url: 'https://www.urbanbrush.net/web/wp-content/uploads/edd/2019/07/urbanbrush-20190716011532646988.png'   
    }
];

// 모든 트윗을 리턴 시키는 함수
export async function getAll(){
    return tweets;

}


// 해당 아이디에 대한 트윗을 리턴 시키는 함수
export async function getAllByUsername(username){
    return tweets.filter((tweet) => tweet.username === username);
}

// 글 번호에 대한 트윗을 리턴
export async function getById(id){
    return tweets.find((tweet) => tweet.id === id);

}

// 트윗을 작성
export async function create(text, name, username){
    return tweet = {
        id : '10',
        text,
        createAt:Date.now().toString(),
        name: name,
        username: username
 // 위처럼  키와 밸류가 같다면 한번 만 써도 됨
 // name,
 // username 이런식으로 
    }
    tweets = [tweet, ... tweets];
    return tweets;
}

// 트윗을 변경
export async function update(id, text){
    const tweet = tweets.find((tweet) => tweet.id === id);
    if (tweet){
        tweet.text = text; // 기존의 text에 새로 입력받은 text값 대입
    }
    return tweet;

}

// 트윗을 삭제
export async function remove(id){
    tweets = tweets.filter((tweet) => tweet.id !== id);

}