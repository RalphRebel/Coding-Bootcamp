var isHotOutside = false;
var isWeekday = true;
var hasMoneyInPocket = false;

var costOfMilk = 2.49;
var moneyInWallet = 10;
var thirstLevel = 5;

var shouldBuyIcecream = isHotOutside && hasMoneyInPocket;
    console.log(shouldBuyIcecream);

var willGoSwimming = isHotOutside || isWeekday;
    console.log(willGoSwimming);

var isAGoodDay = isHotOutside && (isWeekday || hasMoneyInPocket);
    console.log(isAGoodDay);

var willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= 2;
    console.log(willBuyMilk);

