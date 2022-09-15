const count = document.querySelector('.countdown');
var num = 10;

setTimeout(() => {
    count.innerHTML = --num;
    setTimeout(() => {
        count.innerHTML = --num;
        setTimeout(() => {
            count.innerHTML = --num;
            setTimeout(() => {
                count.innerHTML = --num;
                setTimeout(() => {
                    count.innerHTML = --num;
                    setTimeout(() => {
                        count.innerHTML = --num;
                        setTimeout(() => {
                            count.innerHTML = --num;
                            setTimeout(() => {
                                count.innerHTML = --num;
                                setTimeout(() => {
                                    count.innerHTML = --num;
                                    setTimeout(() => {
                                        count.innerHTML = "Happy Independence Day";
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)