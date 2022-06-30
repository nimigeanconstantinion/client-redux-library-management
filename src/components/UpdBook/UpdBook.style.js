import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

export const WrapperUpdBook=styled.div.attrs({className:"divUpd"})`

  #frmupdbook{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    margin: auto;
    padding: 5px;
  }


  label{
    font-size: 1.3em;
  }
  input[type="text"]{
    width: 80%;
    height: 35px;
    float: right;
    margin-bottom: 15px;
  }

  .divupdb{
    width: 100%;
    margin: 5px auto 5px 0px;

  }

  
  #frmupdbook #btn_updb_submit,#btn_updb_del,#btn_updb_cancel{
    width: 200px;
    font-size: 1.5em;
    margin-bottom: 15px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background: rgb(68, 167, 129);
    color: white;
  }

  #err{
    color: red;
  }
  .butoane{
    width: 120px;
    margin-bottom: 10px;
  }
  #alert{
    transition: opacity 2s;
  }




`