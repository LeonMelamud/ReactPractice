export default (props) => {
    const { age, name } = props.user;
    
    const origin = `destructuring : Happy BirthDay ${name} !  you are  ${age}  years old !` ;
    const additional = age <= 18 ? "You are underaged!" : "You are OK!";
    //under18(age);
    return origin + additional;

}
function under18(age){
    if (age <= 18)
        return ` You are underaged!`;
    else
        return ` You are OK!`;
}