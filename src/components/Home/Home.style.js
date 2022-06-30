import styled from "styled-components";

export const WrapperHome=styled.div.attrs({className:"divHome"})`

  margin: 0px auto;
  padding: 0px;
  font-size: 1em;
  box-sizing: border-box;
  width: 80%;

h1{
  font-size: 2em;
  margin-bottom: 15px;
}

main{
  margin: auto;
  margin-top: 50px;
  background: whitesmoke;
  width:70%;
  padding: 10px;
}

table{
  font-size: 1.9em;

}
  table:hover{
    cursor: grab;
  }
  table thead tr th{
    border-bottom: 1px solid rgb(117, 80, 88);
    text-align: left;
    color: black;
  }
  table tr th{
    text-align: left;
    width: 40%;
    color: rgb(27, 75, 27);
  }

  tr:nth-child(even){
    background: rgb(187, 186, 186);
  }

  #btn_create{
    background: rgb(68, 167, 129);
    border: none;
    margin-bottom: 15px;
    font-size: 1.5em;
    color: white;
    padding: 7px;
    border-radius: 3px;
  }


`