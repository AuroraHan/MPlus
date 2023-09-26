import { ref } from "vue";

export const useCountdown = (done?: () => void, ms = 1000, duration = 60) => {
    const lastSendTime = ref(duration);
    let timer: NodeJS.Timer | undefined;
    const start = () => {
        if (timer) return
        timer = setInterval(() => {
            lastSendTime.value--;
            if (lastSendTime.value <= 0) {
                done && done();
                lastSendTime.value = duration;
                clearCountDown();
            }
        }, ms);
    };
    const clearCountDown = () => {
        clearInterval(timer);
        timer = undefined
    };
    const setTime = (time: number) => {
        if (time > 0 && time < 60) {
            lastSendTime.value = time
        }
    }
    return {
        lastSendTime,
        setTime,
        clearCountDown,
        start
    };
};