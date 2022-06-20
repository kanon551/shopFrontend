import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    background: fixed;
`


const Test = () => {

var a;
var sum = 0;
  function test(value){
    if(value === 0){
      console.log("sum is "+sum);
    }
    else{
      sum = sum + value;
      test(value-1);
    }
    

    
  }
test(10);

const getNonRepeat =(value)=> {

  //value[]
  for (var i = 0; i < value.length; i++) {
    
}
  
}
getNonRepeat("abcba")
  return (
    <Container>
      {
        a
      }
    </Container>
  )
}

export default Test
