/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, ChangeEvent } from 'react'
import styles from './BMI.module.css'
import TitleSection from "components/shared/titleSection/TitleSection"
import CustomInput from '../customInput/CustomInput'
import { BMICalculatorFormInputValue } from '../../../types/types'
import image from '../../../assets/bmiPhoto-removebg-preview.png'
import { motion } from "framer-motion"

const BMI = () => {
  const [weight, setWeight] = useState<BMICalculatorFormInputValue>('')
  const [height, setHeight] = useState<BMICalculatorFormInputValue>('')  
  const [bmi, setBmi] = useState<number | null>()
  const [bmiMessage, setBmiMessage] = useState<string>('')

  const onWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value))
  };

  const onHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value))
  }

  const calculateBmi = () => { 
    if (height && weight) {
      const heightInMeters: number = height / 100;
      const bmiValue: number = weight / (heightInMeters * heightInMeters)
      setBmi(Number(bmiValue.toFixed(2)))
      displayMessage(bmiValue)
    }

    setHeight('')
    setWeight('')
  }

  const displayMessage = (bmi: number) => {
    let message = ''
    if (bmi < 18.5) { 
      message = 'You are Underweight'
    } else if (bmi >= 18.5 && bmi < 25) {
        message = 'You are Normal weight'
    } else if (bmi >= 25 && bmi < 30) {
        message = 'You are Overweight'
    } else { 
        message = 'You are Obese'
    } 
    setBmiMessage(message)
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <TitleSection><span className={styles.title_span}>CALCULATE</span> YOUR BMI</TitleSection>
        <p>The body mass index (BMI) calculator calculates body mass index from your weight and height</p>
      </div>
      <div className={styles.flex_box}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className={`${styles.flex_child} ${styles.img_box}`}>
          <img src={image} alt="bmi" />
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className={styles.flex_child}>
          <form className={styles.bmi_form}>
            <CustomInput value={height} onChange={onHeightChange} label='cm' type='number' placeholder='Height'/>
            <CustomInput value={weight} onChange={onWeightChange} label='kg' type='number' placeholder='Weight' />
            <button className={styles.btn_submit} type='button' onClick={calculateBmi}>Calculate BMI</button>
          </form>
          {bmi && bmiMessage && (
            <div className={styles.result}>
              <p className={styles.bmi_result}>Your BMI is: {bmi}.</p>
              <p className={styles.bmi_message}>{bmiMessage}.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default BMI