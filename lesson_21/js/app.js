const body = document.body;
class CreateElement {
	createElem(tag, clas = null, inner = null, attr = null, elemAppend = null) {
		const el = document.createElement(tag);
		if (clas) {
			if (Array.isArray(clas)) clas.forEach((item) => el.classList.add(item));
			el.classList.add(clas);
		}
		if (inner) el.innerText = inner;
		if (attr)
			for (const item in attr) {
				el.setAttribute(item, attr[item]);
			}
		if (elemAppend) elemAppend.append(el);
		return el;
	}
}
class WrongName extends Error {
	constructor() {
		super();
		this.message = "Length name  must has min three letter";
	}
}
class WrongSurname extends Error {
	constructor() {
		super();
		this.message = "Length surname must has min three letter";
	}
}
class WrongCash extends Error {
	constructor() {
		super();
		this.message = "Cash must be a number and bigger then zero";
	}
}
class WrongClaimCash extends Error {
	constructor() {
		super();
		this.message = "You don`t have that amount money on your wallet";
	}
}
class WrongLimit extends Error {
	constructor() {
		super();
		this.message = "Wrong limit";
	}
}
class WrongPercent extends Error {
	constructor() {
		super();
		this.message = "Wrong percent";
	}
}
class ClaimMoney extends Error {
	constructor() {
		super();
		this.message = "You don`t have that amount money";
	}
}
class WrongPin extends Error {
	constructor() {
		super();
		this.message = "Pin code must have four symbol";
	}
}
class Name {
	#name;
	#surname;
	constructor(name, surname) {
		this.Name = name;
		this.Surname = surname;
	}
	get Name() {
		return this.#name;
	}
	changeString(word) {
		let wordNew = word.toLowerCase().split("");
		wordNew[0] = wordNew[0].toUpperCase();
		return wordNew.join("");
	}
	set Name(name) {
		if (name.length < 3) throw new WrongName();
		this.#name = this.changeString(name);
	}

	set Surname(surname) {
		if (surname.length < 3) throw new WrongSurname();
		this.#surname = this.changeString(surname);
	}
	get Surname() {
		return this.#surname;
	}
}
class Client {
	#cash;
	#id;
	#pinCode;
	constructor(name, surname, pin) {
		this.client = new Name(name, surname);
		this.#id = this.createId();
		this.PinCode = pin;
		this.Cash = 0;
	}
	get PinCode() {
		return this.#pinCode;
	}
	get Id() {
		return this.#id;
	}
	get Cash() {
		return this.#cash;
	}
	set PinCode(pin) {
		if (isNaN(pin) || pin.length !== 4) throw new WrongPin();
		this.#pinCode = pin;
	}
	set Cash(many) {
		if (isNaN(many)) throw new WrongCash();
		if (this.#cash) this.#cash = this.Cash + many;
		else this.#cash = many;
	}
	addCash(many) {
		if (many < 0) throw new WrongCash();
		this.Cash = many;
		return `You added ${many}$`;
	}
	getCash(many) {
		const money = many - many * 2;
		if (this.Cash >= many) {
			this.Cash = money;
			return `You got ${many}$`;
		}
		throw new WrongClaimCash();
	}
	createId() {
		const name = `${this.client.Name.toLowerCase()}${this.client.Surname.toLowerCase()}`.split("");
		const id = name.reduce((prevSum, item) => prevSum + item.charCodeAt(), "");
		return id;
	}
	toString() {
		return `${this.client.Name} ${this.client.Surname}. Cash: ${this.Cash}$`;
	}
}

class GoldenClient extends Client {
	#percent;
	#limit;
	constructor(name, surname, pin, limit, percent) {
		super(name, surname, pin);
		this.Limit = limit;
		this.Percent = percent;
	}
	get Limit() {
		return this.#limit;
	}
	get Percent() {
		return this.#percent;
	}
	set Limit(limit) {
		if (isNaN(limit) || limit < 0) throw new WrongLimit();
		this.#limit = limit;
	}
	set Percent(percent) {
		if (isNaN(percent) || percent < 0 || percent > 30) throw new WrongPercent();
		this.#percent = percent;
	}
	changeLimit(limit) {
		this.Limit = limit;
	}
	changePercent(percent) {
		this.Percent = percent;
	}
	renderPanny() {
		const panny = this.definePanny();
		console.log(panny);
		if (panny) this.Cash = -panny;
	}
	getCash(money) {
		if (money <= this.Cash || money <= this.Limit) {
			this.Cash = -money;
			this.renderPanny();
			return `You got ${money}$`;
		}
		throw new ClaimMoney();
	}
	definePanny() {
		if (this.Cash >= 0) return 0;
		return Math.floor(Math.abs(this.Cash) / 100) * this.Percent;
	}
	toString() {
		const commonClient = super.toString();
		return `${commonClient}. Limit: ${this.Limit}$. Percent: ${this.Percent}%`;
	}
}

class Bank extends CreateElement {
	constructor() {
		super();
		this.commonClients = [];
		this.goldClients = [];
		this.el = this.render();
	}
	
	//реєстрація простих користувачів
	registerNewCommonClient(name, surname, pin) {
		this.commonClients.push(new Client(name, surname, pin));
		if (this.buttonCommon.classList.contains("active-btn-result")) this.eventShowCommonClients(this.commonClients);
		return true;
	}
	//реєстрація голд користувачів
	registerNewGoldClient(name, surname, pin, limit = 1000, percent = 3) {
		this.goldClients.push(new GoldenClient(name, surname, pin, limit, percent));
		if (this.buttonGold.classList.contains("active-btn-result")) this.eventShowCommonClients(this.goldClients);
		return true;
	}

	renderString(el, min, max = null) {
		let res;
		if (max) res = el.length < min || el.length > max;
		else res = el.length < min;
		return res;
	}

	//генерація форми для звичайних користувачів
	createCommonForm() {
		const commonForm = this.createElem("form", "bank__form");
		commonForm.addEventListener("click", (event) => this.inputValid(event));
		const title = this.createElem("h3", "bank__register-title", "Registration", null, commonForm);
		const labelName = this.createElem("label", "bank__label", "Client name", { for: "name" }, commonForm);
		const wrapInput = this.createElem("div", "bank__wrap-input", null, null, labelName);
		this.inputName = this.createElem(
			"input",
			"bank__input",
			null,
			{ type: "text", id: "name", placeholder: "Enter name" },
			wrapInput
		);

		const labelSurname = this.createElem("label", "bank__label", "Client surname", { for: "surname" }, commonForm);
		const wrapInput2 = this.createElem("div", "bank__wrap-input", null, null, labelSurname);
		this.inputSurname = this.createElem(
			"input",
			"bank__input",
			null,
			{ type: "text", id: "surname", placeholder: "Enter surname" },
			wrapInput2
		);
		const labelPin = this.createElem("label", "bank__label", "Client new pin", { for: "pin" }, commonForm);
		const wrapInput3 = this.createElem("div", "bank__wrap-input", null, null, labelPin);
		this.inputPin = this.createElem(
			"input",
			"bank__input",
			null,
			{ type: "password", id: "pin", placeholder: "Enter pincode" },
			wrapInput3
		);

		return commonForm;
	}
	//генерація форми для золотих користувачів
	createGoldForm() {
		const form = this.createCommonForm();

		const labelLimit = this.createElem("label", "bank__label", "Client limit credit cash", { for: "credit" }, form);
		const wrapInput = this.createElem("div", "bank__wrap-input", null, null, labelLimit);
		this.inputLimit = this.createElem(
			"input",
			"bank__input",
			null,
			{ type: "number", id: "credit", placeholder: "Enter credit limit" },
			wrapInput
		);
		//this.inputLimit.addEventListener("blur", (event) => this.inputValid(event, "error-input", "success-input", 2));
		const labelPercent = this.createElem("label", "bank__label", "Client percent", { for: "percent" }, form);
		const wrapInput1 = this.createElem("div", "bank__wrap-input", null, null, labelPercent);
		this.inputPercent = this.createElem(
			"input",
			"bank__input",
			null,
			{ type: "number", id: "percent", placeholder: "Enter percent" },
			wrapInput1
		);
		//this.inputPin.addEventListener("blur", (event) => this.inputValid(event, "error-input", "success-input", 1));
		return form;
	}
	//результат реєстрації
	result() {
		alert("The client is registered successfully");
	}
	//кнопка реєстрації користувачів та функціонал реєстрації
	addSubmitButton(form) {
		this.button = this.createElem("input", "bank__button-submit", null, { type: "submit", value: "Register" }, form);
		this.button.addEventListener("click", (event) => {
			event.preventDefault();
			const form = event.target.closest("form");
			const inputs = form.querySelectorAll(".bank__input");
			const name = inputs[0].value;
			const surname = inputs[1].value;
			const pin = inputs[2].value;
			try {
				let result = false;
				if (form.children.length === 5) result = this.registerNewCommonClient(name, surname, pin);
				else if (form.children.length === 7) {
					const limit = inputs[3].value;
					const percent = inputs[4].value;
					result = this.registerNewGoldClient(name, surname, pin, limit, percent);
				}
				if (result) {
					setTimeout(() => {
						for (const input of inputs) input.value = "";
						this.resetClases(".bank__wrap-input", ["error-input", "success-input", "pin-error", "error-lim"]);
					}, 2000);
				}
			} catch (error) {
				if (error instanceof WrongName) inputs[0].value = "";
				else if (error instanceof WrongSurname) inputs[1].value = "";
				else if (error instanceof WrongPin) inputs[2].value = "";
				else if (error instanceof WrongLimit) inputs[3].value = "";
				else if (error instanceof WrongPercent) inputs[4].value = "";
			}
		});
		return form;
	}
	//видалення форми реєстрації з розмітки перед вставленням іншої
	resetWrapForm(container) {
		if (container.firstElementChild) container.firstElementChild.remove();
	}
	resetClases(searchParentSelector, arrClasses) {
		const wrapInputs = document.querySelectorAll(searchParentSelector);
		for (const wrapInput of wrapInputs) {
			arrClasses.forEach((item) => wrapInput.classList.remove(item));
		}
	}
	//зміна показу форми для реєстрації
	eventAdd(form) {
		this.resetWrapForm(this.formContainer);
		this.formContainer.append(form);
		this.resetClases(".bank__wrap-input", ["error-input", "success-input", "pin-error", "error-lim"]);
	}
	//кнопка переходу до форми для реєстрації простих клієнтів
	createButtonCommon() {
		const button = this.createElem(
			"button",
			["bank__button-add-common", "button-nav", "active-btn"],
			"register common"
		);
		button.addEventListener("click", () => this.eventAdd(this.commonForm));
		return button;
	}
	//кнопка переходу до форми для реєстрації золотих клієнтів
	createButtonGold() {
		const button = this.createElem("button", ["bank__button-add-gold", "button-nav"], "register gold");
		button.addEventListener("click", () => this.eventAdd(this.goldForm));
		return button;
	}
	//генерація та рендер блоку з простими або золотими клієнтами
	eventShowCommonClients(clients) {
		this.resetWrapForm(this.resultContainer);
		const client = this.createElem("div", null, null, null, this.resultContainer);
		if (clients.length === 0) client.innerText = "We don`t have clients in our database";
		clients.forEach((item) => {
			const el = this.createClientShow(
				item.client.Name,
				item.client.Surname,
				item.Id,
				item.Cash,
				item.Limit,
				item.Percent
			);
			client.append(el);
		});
	}
	//створення кнопки длі показу всіх звичайних клієнтів
	createButtonShowCommonClient() {
		this.buttonCommon = this.createElem(
			"button",
			["bank__button-show-common-clients", "active-btn-result", "button-nav-result"],
			"show common clients"
		);
		this.buttonCommon.addEventListener("click", () => this.eventShowCommonClients(this.commonClients));
		return this.buttonCommon;
	}
	//створення кнопки для показу всіх золотих клієнтів
	createButtonShowGoldClient() {
		this.buttonGold = this.createElem(
			"button",
			["bank__button-show-gold-clients", "button-nav-result"],
			"show gold clients"
		);
		this.buttonGold.addEventListener("click", () => this.eventShowCommonClients(this.goldClients));
		return this.buttonGold;
	}

	//рендер форми для операцій з готівкою
	createMiniForm(classButton, type) {
		const wrap = this.createElem("div", "bank__wrap-mini-form", null, { "data-type-btn": type });
		const wrapButton = this.createElem("div", "bank__wrap-button-cancel", null, null, wrap);
		this.createElem("button", "bank__button-cancel", null, null, wrapButton);
		const label = this.createElem("label", "bank__label", "Enter amount money:", null, wrap);
		const wrapInput = this.createElem("div", "bank__wrap-input", null, null, label);
		this.createElem(
			"input",
			["bank__input", "bank__input-money-cash"],
			null,
			{ type: "number", placeholder: "Enter amount money" },
			wrapInput
		);
		const labelPin = this.createElem("label", "bank__label", "Enter your pincode:", null, wrap);
		const wrapInput2 = this.createElem("div", "bank__wrap-input", null, null, labelPin);
		this.createElem(
			"input",
			["bank__input", "bank__input-pin-cash"],
			null,
			{ type: "number", placeholder: "Enter pincode" },
			wrapInput2
		);
		this.createElem("button", classButton, "Send", null, wrap);
		return wrap;
	}

	//відкриття форми для додавання готівки
	funcAddCashShowForm(event) {
		const buttonWrap = event.target.closest(".bank__wrap-button");
		buttonWrap.firstElementChild.replaceWith(this.miniAddForm.cloneNode(true));
	}
	//відкриття форми для зняття готівки
	funcGetCashShowForm(event) {
		const buttonWrap = event.target.closest(".bank__wrap-button");
		buttonWrap.firstElementChild.replaceWith(this.miniGetForm.cloneNode(true));
	}
	//рендер картки для кожного клієнта
	createClientShow(name, surname, id, cash, limit = null, percent = null) {
		const wrap = this.createElem("div", "bank__show-client", null, { "data-id": id, "data-type": "common" });
		this.createElem("h4", "bank__name-client", `Name client: ${name} ${surname}`, null, wrap);
		this.createElem("p", "bank__id-client", `Id client: ${id}`, null, wrap);
		this.createElem("p", "bank__cash-client", `Amount money client: ${cash}$`, null, wrap);
		let lim = null;
		let perc = null;
		if (limit)
			lim = this.createElem("p", "bank__limit", `Credit limit client: ${limit}$`, { "data-type": "gold" }, wrap);
		if (percent) perc = this.createElem("p", "bank__percent", `Credit percent client: ${percent}%`, null, wrap);

		const wrapButtonAdd = this.createElem("div", "bank__wrap-button", null, null, wrap);
		const wrapButtonGet = this.createElem("div", "bank__wrap-button", null, null, wrap);

		this.buttonAddCash = this.createElem("button", "bank__add-cash-client", "add cash", null, wrapButtonAdd);

		this.buttonGetCash = this.createElem("button", "bank__get-cash-client", "get cash", null, wrapButtonGet);

		return wrap;
	}
	resetClasesMiniForm(inputs, arrClass) {
		for (const input of inputs) {
			arrClass.forEach((item) => input.parentElement.classList.remove(item));
		}
	}
	eventChangeMiniForm(event) {
		const el = event.target;
		if (el.classList.contains("bank__button-cancel")) {
			const miniForm = el.closest(".bank__wrap-mini-form");
			const attr = miniForm.getAttribute("data-type-btn");
			const buttonWrap = event.target.closest(".bank__wrap-button");
			if (attr == "add") buttonWrap.firstElementChild.replaceWith(this.buttonAddCash.cloneNode(true));
			else if (attr == "get") buttonWrap.firstElementChild.replaceWith(this.buttonGetCash.cloneNode(true));
		}
		let buttonWrap;
		if (el.classList.contains("bank__add-cash-client")) {
			buttonWrap = event.target.closest(".bank__wrap-button");
			buttonWrap.firstElementChild.replaceWith(this.miniAddForm.cloneNode(true));
		}
		if (el.classList.contains("bank__get-cash-client")) {
			buttonWrap = event.target.closest(".bank__wrap-button");
			buttonWrap.firstElementChild.replaceWith(this.miniGetForm.cloneNode(true));
		}

		if (el.classList.contains("bank__button-add-cash") || el.classList.contains("bank__button-get-cash")) {
			console.log("444");
			const classError = "error-input";
			const classSuccess = "success-input";
			const classPinError = "pin-error";
			const inputs = event.target.parentElement.querySelectorAll(".bank__input");
			this.resetClasesMiniForm(inputs, [classError, classSuccess, classPinError]);

			let flag = 0;
			if (this.renderString(inputs[0].value, 2)) inputs[0].parentElement.classList.add(classError);
			else {
				inputs[0].parentElement.classList.add(classSuccess);
				flag++;
			}
			if (this.renderString(inputs[1].value, 4, 4)) {
				inputs[1].parentElement.classList.add(classError);
				inputs[1].parentElement.classList.add(classPinError);
			} else {
				inputs[1].parentElement.classList.add(classSuccess);
				flag++;
			}
			if (flag !== 2) return;
			if (el.classList.contains("bank__button-add-cash"))
				this.funcChangeCash(event, this.commonClients, this.goldClients, "add");

			if (el.classList.contains("bank__button-get-cash"))
				this.funcChangeCash(event, this.commonClients, this.goldClients, "get");

			this.resetClasesMiniForm(inputs, [classError, classSuccess, classPinError]);
		}
	}
	//валідація форм реєстрації
	inputValid(event) {
		const classError = "error-input";
		const classSuccess = "success-input";
		if (event.target.classList.contains("bank__button-submit")) {
			this.resetClases(".bank__wrap-input", ["error-input", "success-input"]);
			const inputs = event.target.parentElement.querySelectorAll(".bank__input");
			if (this.renderString(inputs[0].value, 2)) inputs[0].parentElement.classList.add(classError);
			else inputs[0].parentElement.classList.add(classSuccess);
			if (this.renderString(inputs[1].value, 2)) inputs[1].parentElement.classList.add(classError);
			else inputs[1].parentElement.classList.add(classSuccess);

			if (this.renderString(inputs[2].value, 4, 4)) {
				inputs[2].parentElement.classList.add(classError);
				inputs[2].parentElement.classList.add("pin-error");
			} else inputs[2].parentElement.classList.add(classSuccess);

			if (!inputs[3]) return;

			if (this.renderString(inputs[3].value, 2)) inputs[3].parentElement.classList.add(classError);
			else inputs[3].parentElement.classList.add(classSuccess);

			if (this.renderString(inputs[4].value, 1, 5)) {
				inputs[4].parentElement.classList.add(classError);
				inputs[4].parentElement.classList.add("error-lim");
			} else inputs[4].parentElement.classList.add(classSuccess);
		}
	}
	//функціонал операцій з готівкою
	funcChangeCash(event, common, gold, flag) {
		const parentEl = event.target.closest(".bank__show-client");
		const money = parentEl.querySelector(".bank__input-money-cash");
		const pin = parentEl.querySelector(".bank__input-pin-cash");
		const id = parentEl.getAttribute("data-id");
		const type = parentEl.getAttribute("data-type");
		let elemInDatabase;
		if (type == "common") elemInDatabase = common.find((item) => item.Id === id);
		else if (type == "gold") elemInDatabase = gold.find((item) => item.Id === id);
		if (elemInDatabase.PinCode === pin.value) {
			try {
				let result;
				if (flag === "add") result = elemInDatabase.addCash(parseInt(money.value));
				else if (flag === "get") result = elemInDatabase.getCash(parseInt(money.value));
				money.value = "";
				pin.value = "";
				if (type === "common") this.eventShowCommonClients(this.commonClients);
				else this.eventShowCommonClients(this.goldClients);
				alert(result);
			} catch (error) {
				if (error instanceof WrongClaimCash) pin.value = "";
				if (error instanceof WrongCash) money.value = "";
				alert(error.message);
			}
		}
	}
	//івент по головним кнопкам(автивна кнопка)
	bankEvent(event, bank, classContains, activeClass) {
		if (event.target.classList.contains(classContains)) {
			const buttonsNav = bank.querySelectorAll(`.${classContains}`);
			for (const button of buttonsNav) button.classList.remove(activeClass);
			event.target.classList.add(activeClass);
		}
	}
	//рендер форм операцій з готівкою
	generateMiniForms() {
		this.miniAddForm = this.createMiniForm("bank__button-add-cash", "add");
		this.miniGetForm = this.createMiniForm("bank__button-get-cash", "get");
	}
	//рендер обох форм реєстрації
	createForm() {
		this.commonForm = this.addSubmitButton(this.createCommonForm());
		this.goldForm = this.addSubmitButton(this.createGoldForm());
	}

	render() {
		//банк
		const bank = this.createElem("div", "bank");
		//події по кнопкам навігації
		bank.addEventListener("click", (event) => this.bankEvent(event, bank, "button-nav", "active-btn"));
		bank.addEventListener("click", (event) => this.bankEvent(event, bank, "button-nav-result", "active-btn-result"));
		//головний загаловок
		const title = this.createElem("h1", "bank__title", "Admin, welcome at the bank", null, bank);
		//генерація форм реєстрації
		this.createForm();
		//генерація форм дій з готівкою
		this.generateMiniForms();

		//додавання головних кнопок на сторінку
		bank.append(
			this.createButtonCommon(),
			this.createButtonGold(),
			this.createButtonShowCommonClient(),
			this.createButtonShowGoldClient()
		);
		//контейнер для форм та показу клієнтів
		const wrapForm = this.createElem("div", "bank__wrap-form", null, null, bank);
		//контейнери для форм та показу клієнтів
		this.formContainer = this.createElem("div", "bank__form-container", null, null, wrapForm);
		this.resultContainer = this.createElem("div", "bank__result-container", null, null, wrapForm);
		this.resultContainer.addEventListener("click", (event) => this.eventChangeMiniForm(event));

		//вставка форми за замовч
		this.formContainer.append(this.commonForm);
		//вставка показу клієнтів за замовч
		this.eventShowCommonClients(this.commonClients);
		return bank;
	}
}
try {
	const bank = new Bank();
	body.prepend(bank.el);
} catch (error) {
	console.log(error.message);
	console.log(error.stack);
}

//-----------------------------------------
