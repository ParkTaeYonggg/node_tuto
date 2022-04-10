const searchInfo = (req, res) => {
    const returnData = [
        {
            image: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg",
            name: "갑돌이",
            age: "3세",
            info: "털이 복실복실하다. 품격있는 고양이"
        },
        {
            image: "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg",
            name: "뇌로",
            age: "0세",
            info: "새끼고양이다. 귀여운 발길질"
        },

    ];
    try {
        console.log(req.params.category);
        if (req.params.category === "cats") {
            res.json({
                list:returnData,
                status: 200
            })
        } else {
            res.json({
                list: [],
                status: 200
            })
        }
    } catch (err) {
        console.log(err, "검색")
    }
}

module.exports = searchInfo;