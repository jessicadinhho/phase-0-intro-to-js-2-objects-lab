// Write your solution in this file!
const employee = {
    name: "Ara",
    streetAddress: "150 Green st"
};
function updateEmployeeWithKeyAndValue(obj,key,value){
    return{
     ...obj,
    [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(employee,key){
    const newList = {...employee};
    delete newList[key];
    return {newList};
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}