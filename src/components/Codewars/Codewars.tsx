function Codewars() {
    console.log(multipli(10, 15))
    // duplicateCount("kirill")
    findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
    return (
        <div>
            Codewars {multipli(10, 15)}
        </div>
    )


}

function multipli(a: number, b: number) {
    return a * b
}

function duplicateCount(text: string) {
    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j <= text.length; j++) {

            if (text[i] === text[j]) {
                console.log("j - " + j + "  symbol - " + text[i])

            }
        }
    }
}

function findOdd(arr: number[]) {

}

export default Codewars