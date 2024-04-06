//Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
//        назва компанії на час розробки (назву періодично змінюють)
//        власник компанії
//        спонсори (масив спонсорів)
//                * прізвище спонсора
//                * ім’я  спонсора
//                * сума вкладень спонсора
//        рік випуску
//        вартість сайту
let objectsCompany = [
	{
		name: "TTY",
		owner: " Pavlo Podolian",
		contributs: [
			{
				surName: "Napk",
				name: "Petro",
				amountCash: 2400
			},
			{
				surName: "Blank",
				name: "Ivan",
				amountCash: 23000
			},
			{
				surName: "Lamda",
				name: "John",
				amountCash: 2000
			}
		],
		yearOld: 2024,
		costWebSite: 22000
	},
	{
		name: "BBS",
		owner: "Petro Ivanovich",
		contributs: [
			{
				surName: "Napkt",
				name: "Petro",
				amountCash: 24100
			},
			{
				surName: "Blankt",
				name: "Ivan",
				amountCash: 9000
			},
			{
				surName: "Lamdar",
				name: "John",
				amountCash: 6000
			}
		],
		yearOld: 2005,
		costWebSite: 2000
	},
	{
		name: "TWT",
		owner: "Anna Lampa",
		contributs: [
			{
				surName: "Napko",
				name: "Petr",
				amountCash: 92400
			},
			{
				surName: "Blat",
				name: "Lama",
				amountCash: 23000
			},
			{
				surName: "Lama",
				name: "Jona",
				amountCash: 20300
			}
		],
		yearOld: 2008,
		costWebSite: 5500
	},
	{
		name: "TWT",
		owner: "Anna Lampa",
		contributs: [
			{
				surName: "Napko",
				name: "Petr",
				amountCash: 9240
			},
			{
				surName: "Blat",
				name: "Lama",
				amountCash: 2300
			},
			{
				surName: "Lama",
				name: "Jona",
				amountCash: 2300
			}
		],
		yearOld: 2008,
		costWebSite: 14900
	},
	{
		name: "TWT",
		owner: "Anna Lampa",
		contributs: [
			{
				surName: "Napko",
				name: "Petr",
				amountCash: 9254
			},
			{
				surName: "Blat",
				name: "Lama",
				amountCash: 23005
			},
			{
				surName: "Lama",
				name: "Jona",
				amountCash: 20344
			}
		],
		yearOld: 2022,
		costWebSite: 5900
	}
];

// 1) загальну вартість усіх сайтів
let amountCostWebSites = objectsCompany.reduce((prevSum, item) => (prevSum + item.costWebSite), 0);
document.write(`Загальна вартість сайтів становить : ${amountCostWebSites}</br>`);

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
let numberSites = objectsCompany.reduce(
	(prevCount, item) => (item.yearOld >= 2000 && item.yearOld <= 2009 ? (prevCount + 1) : prevCount),
	0
);
document.write(`кількість сайтів, що було зроблено між 2000 та 2009 рр становить :${numberSites}</br>`);

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
let numberSitesCashSum = objectsCompany.reduce((prevCount, item) => {
	let sumCach = item.contributs.reduce((prevSum, item) => (prevSum + item.amountCash), 0);
	if (sumCach > 100000) return (prevCount + 1);
	else return prevCount;
}, 0);
document.write(
	`кількість сайтів, де сума спонсорських вкладень була більшою за 100000 становить : ${numberSitesCashSum} </br>`
);

// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
let allSponsors = objectsCompany.reduce((prevArr, item) => {
	let subObjSponsors = item.contributs.reduce((prevArr, item) => {
		return [...prevArr, `${item.surName} ${item.name}`];
	}, []);
	return [...prevArr, ...subObjSponsors];
}, []);
document.write(`Список усіх спонсорів:</br>`);
allSponsors.forEach((element) => {
	document.write(`${element}</br>`);
});

// 5) знайти рік, коли прибуток був найбільшим
let objRes = {};
objectsCompany.forEach((item) => {
	if (item.yearOld in objRes) {
		objRes[item.yearOld] += item.costWebSite;
	} else objRes[item.yearOld] = item.costWebSite;
});
console.log(objRes);
let maxCash = -Infinity;
let numYear;
for (const key in objRes) {
	if (objRes[key] > maxCash) {
		maxCash = objRes[key];
		numYear = key;
	}
}
document.write(`Найбільший прибуток був у ${numYear} році. Він становить : ${maxCash} </br>`);

// 6) упорядкувати список за спаданням прибутку
let sortedArr = objectsCompany.sort((a, b) => a.costWebSite - b.costWebSite);
console.log(sortedArr);
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
let smallCash = [];
let bigCash = [];
objectsCompany.forEach((item) => (item.costWebSite >= 10000 ? bigCash.push(item) : smallCash.push(item)));
console.log(smallCash);
console.log(bigCash);
