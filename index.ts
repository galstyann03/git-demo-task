export default function getRandomNumber(): void {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    console.log(`Random number: ${randomNumber}`);
}

getRandomNumber();
