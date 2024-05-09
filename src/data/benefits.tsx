import { HomeModernIcon, UserGroupIcon, AcademicCapIcon, FaceSmileIcon } from "@heroicons/react/24/solid"
import { BenefitType } from '../types/types'

export const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon/>,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon/>,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon/>,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
  {
    icon: <FaceSmileIcon/>,
    title: "Healthy Life",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque.",
  },
]