

const ResultPage = () => {

    const value = localStorage.getItem('result');
    console.log(value);

    return (
        <>
            <h1>Your Result</h1>
            <result>
                <div>
                    <h4>{value}</h4>
                </div>
            </result>
        </>
    )
}

export default ResultPage;