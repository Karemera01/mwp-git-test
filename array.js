
let person={
    firstName:"Gerard",
    lastName:"Karemera kwizera",
    print:function(){
        console.log(this.firstName + this.lastName);
    }
};
person.print()
let copyPers={...person};
copyPers.firstName="Gerard";
copyPers.lastName="KAREMERA";
copyPers.middleName="kwizera";

copyPers.print();
 person={...copyPers};
person.middleName




function isEvenLog(number, index, array) {
    if (number % 2 === 0) {
        console.log(index , ". " , number , " from the array: " , array);
    }
}

