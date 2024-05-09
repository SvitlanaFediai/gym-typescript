export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  Testimonials = 'testimonials',
  ContactUs = 'contactus'
}

export interface BenefitType {
  icon: JSX.Element
  title: string
  description: string
}

export interface ClassType {
  name: string
  description?: string
  image: string
}

export interface TestimonialType {
  name: string
  image: string
  comment: string
}

export type BMICalculatorFormInputValue = number | ""