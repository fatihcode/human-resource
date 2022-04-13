import artboard_1 from '../media/header/artboard_1.jpg'
import artboard_2 from '../media/header/artboard_2.jpg'
import artboard_3 from '../media/header/artboard_3.jpg'
import artboard_4 from '../media/header/artboard_4.jpg'

import team_1 from '../media/team/1.jpg'
import team_2 from '../media/team/2.jpg'
import team_3 from '../media/team/3.jpg'

import microsoft from '../media/logos/microsoft.svg'
import google from '../media/logos/google.svg'
import ibm from '../media/logos/ibm.svg'
import facebook from '../media/logos/facebook.svg'

import about_1 from '../media/about/1.jpg'
import about_2 from '../media/about/2.jpg'
import about_3 from '../media/about/3.jpg'
import about_4 from '../media/about/4.jpg'

// export const API_URL = "https://jsonplaceholder.typicode.com/users"
// export const API_URL = "http://127.0.0.1:9000/users"
export const API_URL = "https://resource-human.herokuapp.com/users"


export const review = [
	{
		email: "joseph@teleworm.us",
		title: "Our Humble Beginnings",
		message: '"I subscribed to the Recertification Program to complete the credits for my SPHR renewal. I found the e-learning courses and webinars very interesting, helpful and up to date on current information. I would not have been able to get all of my credits without this very convenient and affordable option. Thank you for a great resource!"'
	},
	{
		email: "lawrence@superrito.com",
		title: "An Agency is Born",
		message: `"One of the things that really inspired me about being part of the LEAD conference is being in the presence of all of these great HR leaders and learning and hearing their stories and thinking about how we can take back some of the pieces of great information that they've shared with us"`
	},
	{
		email: "julia@einrot.com",
		title: "Transition to Full Service",
		message: '"The Excellence Essentials magazines provide a different perspective that allows an individual to view a topic from a fresh, new angle, so one can reflect, and possibly even be challenged to change for the better. The Excellence Essentials magazines provide an indispensable outlet for the sharing of HR knowledge."'
	}
]


export const slideItem = [
	{
		title: "First slide label",
		image: artboard_1,
		description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
	},
	{
		title: "Second slide label",
		image: artboard_2,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	},
	{
		title: "Third slide label",
		image: artboard_3,
		description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
	},
	{
		title: "Fourth slide label",
		image: artboard_4,
		description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
	}
]

export const team = [
	{
		name: "Parveen Anand",
		work: "Lead Designer",
		image: team_1
	},
	{
		name: "Diana Petersen",
		work: "Lead Marketer",
		image: team_2
	},
	{
		name: "Larry Parker",
		work: "Lead Developer",
		image: team_3
	}
]

export const brand = [
	{
		name: "Microsoft",
		image: microsoft
	},
	{
		name: "Google",
		image: google
	},
	{
		name: "Facebook",
		image: facebook
	},
	{
		name: "IBM",
		image: ibm
	}
]

export const aboutItem = [
	{
		title: "Big Hairy Audacious Goal",
		image: about_1,
		description: "By 2040, we will impact 50% of the global workforce by empowering HR professionals in their careers, maximizing human potential."
	},
	{
		title: "Mission",
		image: about_2,
		description: "We provide personalized guidance and tools to help HR professionals maximize their potential, navigate their careers, and transform HR teams to engage and inspire their workforce."
	},
	{
		title: "Vision",
		image: about_3,
		description: "We see a world in which every HR professional has the education, skills, competencies, tools to be able to measure their impact in creating organizational value and inspired workforces."
	},
	{
		title: "Human Resources Online",
		image: about_4,
		description: "HR heads do not have time to read magazines and attend events websites they can not trust. This is why they choose Human Resources Online as their go-to source for creative new ideas, productive conversations, and relevant platforms to succeed in their roles."
	},
]