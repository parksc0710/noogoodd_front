import {useState, useEffect} from "react";

const UPDATE_CYCLE:number = 1000;
const KEY_LOCALE:string = "KEY_LOCALE";
enum Locale {
    US = "en-US",
    KR = "ko-KR",
}
const getLocaleFromString = (text: string) => {
    switch (text) {
        case Locale.US:
            return Locale.US;
        case Locale.KR:
            return Locale.KR;
        default:
            return Locale.US;
    }
}

const UseEffectSample = () => {

    const [timestamp, setTimestamp] = useState(new Date());
    const [locale, setLocale] = useState(Locale.US);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date());
        }, UPDATE_CYCLE);

        // 컴포넌트가 언마운트 될 때 리턴값
        return () => {
            clearInterval(timer);
        }
    // [] 배열로 넘기면 초기 그리기 시에만 실행
    }, []);

    useEffect(() =>{
        localStorage.setItem(KEY_LOCALE, locale);
        // locale 값이 변경될 때마다 실행
    }, [locale]);

    return(
        <div>
            <p>
                <span id="current-time-label">현재 시간</span>
                <span>: {timestamp.toLocaleTimeString(locale)}</span>
                <select
                    value={locale}
                    onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                    <option value={Locale.US}>{Locale.US}</option>
                    <option value={Locale.KR}>{Locale.KR}</option>
                </select>
            </p>
        </div>
    )
}

export default UseEffectSample;