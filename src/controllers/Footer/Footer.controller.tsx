import React from 'react'
import * as newsletterAction from "../../store/actions/newsletter.actions"
import { Footer as FooterComponent } from '../../components/Footer/Footer.component'
import { useDispatch, useSelector } from 'react-redux'
import * as applyAction from '../../store/actions/apply.actions';
import axios from 'axios';
import config from '../../store/actions/config';

export const Footer = (props: any) => {
  const dispatch = useDispatch()
  const loginReducer = useSelector((state:any) => state.loginReducer)
  const applyReducer = useSelector((store: any) => store.applyReducer)
  const newsletterReducer = useSelector((store: any) => store.newsletterReducer)
  
  const newsletter = (name:string, email:string) => {
    dispatch(newsletterAction.newsletter({ email, name }))
  }
  
  const sendApply = async (name: string, email: string, phone: number, file: any) => {
    try {
      if(file !== null){
        const cv: any = await uploadCV(file)
        if( name !== '' && email !== '' && phone !== 0 && cv !== '' && cv !== undefined){
          const object: {name: string, email: string, phone: number, cv: string} = {
            name,
            email,
            phone,
            cv
          }
          dispatch(applyAction.setApply(object))
        }
      }
      
    } catch (error) {
      console.log('No se pudo subir el archivo: ', error)
    }
  }

  /* const sendApplyWsp = () =>{
    if(applyReducer.fetched && applyReducer.data){
      window.location.href = "https://google.com"
    }
  } */

  const uploadCV = async (file: any) =>{

    let formData = new FormData();
    formData.append('image', file)

    let payload: any = await axios.post(
      `https://static.ecosaludcentro.com/image/imexico/apply`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return payload.data.result
  }

  return (
    <FooterComponent loginReducer={loginReducer} newsLetter={newsletter} sendApply={sendApply} newsletterReducer={newsletterReducer} applyReducer={applyReducer} />
  )
}