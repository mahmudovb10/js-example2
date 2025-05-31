// // function decloration
// function calc1(a = 0, b = 0) {
//   console.log(a + b, "Dekloratsiyon Funksiya");
// }
// calc1();

// // function expession
// const calc2 = function () {
//   console.log("Ekspression Funksiya");
// };
// calc2();

// // arrow function
// const calc3 = () => {
//   console.log("Arrov Funksiya");
// };
// calc3();

// Func1. Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling. QYM
// Input: rectangle (6, 9)
// Output: 54, 30

// function rectangle(a, b) {
//   let area = a * b;
//   let perimeter = 2 * (a + b);
//   return `${area}, ${perimeter}`;
// }
// console.log(rectangle(6, 9));

// Func2. Tomoni a ga teng bo’lgan teng tomonli uchburchakning yuzasi va perimetrini hisoblovchi triangle(a) nomli funksiya hosil qiling. QYM
// triangle (6)

// function trigle(a) {
//   let s = (Math.sqrt(3) / 4) * a ** 2;
//   let p = 3 * a;

//   console.log(`S=${s} P${p}`);
// }
// trigle(6);

// Func3.  1 dan n ga sonlar yig’indisini qaytaruvchi sum(n) nomli funksiya hosil qiling. QY

// function sum(n) {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }
// console.log(sum(5));

// Func4. isSquare (k) mantiqiy funksiyasini hosil qiling. (k > 0). Agar k biror butun sonning kvadrati bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isSquare(10) => false
// isSquare(25) => true

// function isSquare(k) {
//   let sqrt = Math.sqrt(k);
//   return Number.isInteger(sqrt);
// }

// console.log(isSquare(25));

// Func5. Butun qiymat qaytaruvchi digitCount(k) funksiyasini hosil qiling. (k > 0). Funksiya k ning raqamlari sonini qaytarsin. QY
// digitCount(8791) => 4

// function digitCount(k) {
//   return k.toString().length;
// }

// console.log(digitCount(8791)); // Natija: 4

// Func6. n natural sonning raqamlari yig'indisini hisoblovchi getDigitSum(n) nomli funksiya hosil qiling. QY
// getDigitSum (456) => 15

// function getDigitSum(n) {
//   let digits = n.toString();
//   let sum = 0;

//   for (let i = 0; i < digits.length; i++) {
//     sum += parseInt(digits[i]);
//   }

//   return sum;
// }

// console.log(getDigitSum(456));

// Func7. timeToHMS(T) funksiyasini hosil qiling. Funksiya berilgan T sekundni, H - soat, M - minut, S - sekundlarga ajratsin. QY

// function timeToHMS(T) {
//   let H = Math.floor(T / 3600);
//   let M = Math.floor((T % 3600) / 60);
//   let S = T % 60;
//   return `${H}:${M}:${S}`;
// }
// console.log(timeToHMS(400));

// Func8. incTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund keyingi vaqtni ko’rsatsin. QY
// incTime(0, 6, 40) => 00:06:41
// incTime(0, 6, 59) => 00:07:00
// incTime(1, 59, 59) => 02:00:00
// incTime(23, 59, 59) => 00:00:00

// function incTime(H, M, S) {
//   S += 1;

//   if (S === 60) {
//     S = 0;
//     M += 1;
//   }

//   if (M === 60) {
//     M = 0;
//     H += 1;
//   }

//   if (H === 24) {
//     H = 0;
//   }

//   let HH = String(H).padStart(2, "0");
//   let MM = String(M).padStart(2, "0");
//   let SS = String(S).padStart(2, "0");

//   return `${HH}:${MM}:${SS}`;
// }

// console.log(incTime(0, 6, 40));
// console.log(incTime(0, 6, 59));
// console.log(incTime(1, 59, 59));
// console.log(incTime(23, 59, 59));

//                           UYGA VAZIFA

// Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243

// function power(a, n) {
//   return Math.pow(a, n);
// }

// console.log(power(3, 5));

// Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 2

// function mean(a, b) {
//   let arifmetik = (a + b) / 2;
//   let geometrik = Math.sqrt(a * b);
//   return `${arifmetik}, ${geometrik}`;
// }

// console.log(mean(12, 48));

// Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1

// function sign(n) {
//   if (n > 0) {
//     return 1;
//   } else if (n < 0) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// console.log(sign(10));

// Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1

// function numberOfRoots(A, B, C) {
//   let D = B * B - 4 * A * C;

//   if (D > 0) {
//     return 2;
//   } else if (D === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(numberOfRoots(1, -6, 9));

// Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY

// function areaCircle(R) {
//   return Math.PI * R * R;
// }

// console.log(areaCircle(5));

// Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
// sumRange(8, 10) => 27

// function sumRange(A, B) {
//   if (A > B) {
//     return 0;
//   }

//   let sum = 0;
//   for (let i = A; i <= B; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sumRange(8, 10));

// Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
// calc(10, 15, “*”) => 150
// calc(7, 8, “+”) => 15

// function calc(a, b, s) {
//   if (s === "+") {
//     return a + b;
//   } else if (s === "-") {
//     return a - b;
//   } else if (s == "*") {
//     return a * b;
//   } else if (s === "/") {
//     return a / b;
//   } else {
//     return 0;
//   }
// }

// console.log(calc(10, 15, "*"));

// Func8. Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
// isEven(10) => true

// function isEven(k) {
//   return k % 2 === 0;
// }
// console.log(isEven(10));

// Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10

// function sortABC(a, b, c) {
//   let arr = [a, b, c];
//   arr.sort(function (x, y) {
//     return x - y;
//   });
//   return arr.join(", ");
// }

// console.log(sortABC(10, 5, 8));

// Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY

// function isPowerN(K, N) {
//   if (K <= 0 || N <= 0) return false;

//   let m = Math.log(K) / Math.log(N);
//   return Math.abs(m - Math.round(m)) < 1e-10;
// }

// console.log(isPowerN(27, 3));

// Func11. isPrime(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni tub bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isPrime(7)  => true

// function isPrime(N) {
//   if (N <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(7));

// Func12. isPrime funksiyasi orqali N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi numberOfPrime(N) nomli dastur tuzilsin. QY
// numberOfPrime(10) => 4

// function numberOfPrime(N) {
//   let count = 0;
//   for (let i = 2; i <= N; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(numberOfPrime(10));

// Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
// digitNth(105782, 5) => 8
// digitNth(1057, 5) => -1

// function digitCount(k) {
//   return k.toString().length;
// }

// function digitNth(K, N) {
//   if (digitCount(K) < N) {
//     return -1;
//   }

//   let str = K.toString();
//   return parseInt(str[N - 1]);
// }

// console.log(digitNth(105782, 5));
// console.log(digitNth(1057, 5));

// Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
// digitNth(105782, 5) => 8
// digitNth(1057, 5) => -1

// function digitNth(K, N) {
//   if (digitCount(K) < N) {
//     return -1;
//   }

//   let str = K.toString();
//   return parseInt(str[N - 1]);
// }
// console.log(digitNth(105782, 5));

// Func14. N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi inverseNumber(N) nomli funksiya hosil qiling. QY
// inverseNumber(56814) => 41865

// function inverseNumber(N) {
//   let str = N.toString();

//   let reversedStr = str.split("").reverse().join("");

//   return parseInt(reversedStr);
// }
// console.log(inverseNumber(56814));

// Func15. isPalindrom(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni palindrom bo'lsa - true, aks holda false qiymat qaytarilsin. inverseNumber funksiyasidan foydalaning. Palindromik son - chapda ham, o’ngdan ham o’qilganda bir xil bo’ladigan son. Masalan, 123321, 78987. QY1
// isPalindrom(167876) => true

// function isPalindrom(N) {
//   return N === inverseNumber(N);
// }
// console.log(isPalindrom(167876));

// Func16. 1 dan N ga sonlar ko’paytmasini qaytaruvchi factorial(N) nomli funksiya hosil qiling. Agar N manfiy bo’lib qolsa, 1 qaytarilsin. QY

// function factorial(N) {
//   if (N < 0) {
//     return 1;
//   }

//   let result = 1;
//   for (let i = 1; i <= N; i++) {
//     result *= i;
//   }

//   return result;
// }
// console.log(factorial(1));

// Func17. 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing.
// getSum3(15) => 45

// function getSum3(N) {
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(getSum3(15));

// Func18. 1 dan N ga sonlar bo’lgan juft va toqlar sonlar yig’indisini qaytaruvchi sumOddEven(N) nomli funksiya hosil qiling. QYM
// sumOddEven(10) => 30, 25

// function sumOddEven(N) {
//   let evenSum = 0;
//   let oddSum = 0;

//   for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0) {
//       evenSum += i;
//     } else {
//       oddSum += i;
//     }
//   }

//   return `${evenSum}, ${oddSum}`;
// }
// console.log(sumOddEven(10));
