import projectOneHeader from "../assets/images/barari.webp";

import projectTwoHeader from "../assets/images/oxford.webp";
import locationIcon from "../assets/icons/location-icon.svg";
import percentage from "../assets/icons/down-payment.svg";
import coinIcon from "../assets/icons/coin.svg";
import DubaiVideo from "../assets/videos/dubai.mp4";
//Nearby Images
import dxb from "../assets/images/nearby/dxb.webp";
import downtown from "../assets/images/nearby/downtown.webp";
import marina from "../assets/images/nearby/marina.webp";
import moe from "../assets/images/nearby/moe.webp";
import dwc from "../assets/images/nearby/dwc.webp";
import jumeirah from "../assets/images/nearby/jumeirah.webp";
export const projectsData = [
	{
		id: 1,
		ProjectName: { en: "Barari Views", ar: "جاكوب" },
		HeaderTitle: {
			en: "Enjoy Endless Greenary Views at Al Barari",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		HeaderTitleTow: {
			en: "Greenary",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		HeaderImage: projectOneHeader,
		InfoTitle: {
			en: "Distiguished Design With Private pool at your Balcony",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		InfoSubTitle: {
			en: "Barari Views is a high-end residential units from studios, 1, 2 & 3 bedroom apartments with private pool.There are smart home systems installed in all the properties, allowing you to easily adjust the lighting, temperature, security features and more. ",
			ar: "استمتع بإطلالات بانورامية على بحيرة الغاف البكر بينما تنغمس في أسلوب حياة فاخر حقًا",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED750K", ar: "AED750K" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Majan", ar: "مجان" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
			{
				Icon: percentage,
				Title: { en: "20%", ar: "20%" },
				SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
			},
		],
		Nearby: [
			{
				Duration: "24",
				Place: { en: "Palm Jumeirah ", ar: "" },
				Image: jumeirah,
			},
			{
				Duration: "24",
				Place: { en: "Dubai Marina", ar: "" },
				Image: marina,
			},
			{
				Duration: "20",
				Place: { en: "DWC Airport", ar: "" },
				Image: dwc,
			},
			{
				Duration: "30",
				Place: { en: "DXB Airport", ar: "" },
				Image: dxb,
			},
			{
				Duration: "21",
				Place: { en: "Dubai Downtown", ar: "" },
				Image: downtown,
			},
			{
				Duration: "20",
				Place: { en: "Mall of Emirates", ar: "" },
				Image: moe,
			},
		],
		Video: DubaiVideo,
	},
	{
		id: 2,
		ProjectName: { en: "10 Oxford", ar: "10 Oxford" },
		HeaderTitle: {
			en: "Oxford Where Quality & High Design Meet",
			ar: "نص عربي للمشروع الثاني أي شي",
		},
		HeaderImage: projectTwoHeader,
		InfoTitle: {
			en: "Earth's natural elements come to life within its architecture",
			ar: "عنوان المشروع الثاني",
		},
		InfoSubTitle: {
			en: "This remarkable residential project offers an exquisite blend of nature-inspired design, with a total of 434 units spread across basement, ground, and 5 floors, luxurious living, and an array of amenities to ensure a comfortable lifestyle.",
			ar: "شرح مبسط عن المشروع الثاني ",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED680K", ar: "AED680K" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Arjan", ar: "أرجان" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
			{
				Icon: percentage,
				Title: { en: "20%", ar: "20%" },
				SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
			},
		],
		Nearby: [
			{
				Duration: "24",
				Place: { en: "Palm Jumeirah ", ar: "" },
				Image: jumeirah,
			},
			{
				Duration: "24",
				Place: { en: "Dubai Marina", ar: "" },
				Image: marina,
			},
			{
				Duration: "20",
				Place: { en: "DWC Airport", ar: "" },
				Image: dwc,
			},
			{
				Duration: "30",
				Place: { en: "DXB Airport", ar: "" },
				Image: dxb,
			},
			{
				Duration: "21",
				Place: { en: "Dubai Downtown", ar: "" },
				Image: downtown,
			},
			{
				Duration: "20",
				Place: { en: "Mall of Emirates", ar: "" },
				Image: moe,
			},
		],
		Video: DubaiVideo,
	},
];
