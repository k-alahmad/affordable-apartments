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
import global from "../assets/images/nearby/global.webp";
import jumeirah from "../assets/images/nearby/jumeirah.webp";
import img from "../assets/images/nearby/img.webp";
import dunecrest from "../assets/images/nearby/dunecrest.webp";
export const projectsData = [
	{
		id: 1,
		ProjectName: { en: "Barari Views", ar: "جاكوب" },
		HeaderTitle: {
			en: "Enjoy Endless Greenery Views at Al Barari",
			ar: "إستمتع بالخضار المحيط بك بمنظر خلاب ",
		},
		HeaderTitleTow: {
			en: "Greenary",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		HeaderImage: projectOneHeader,
		InfoTitle: {
			en: "Distiguished Design With Private pool at your Balcony",
			ar: "تصمم فريد مع مسبحك الخاص على البلكون",
		},
		InfoSubTitle: {
			en: "Barari Views is a high-end residential units from studios, 1, 2 & 3 bedroom apartments with private pool.There are smart home systems installed in all the properties, allowing you to easily adjust the lighting, temperature, security features and more. ",
			ar: "براري فيوز تمثل وحدات سكنية فاخرة تتضمن استوديوهات وشقق بغرفة نوم واحدة أو غرفتين أو ثلاث غرف نوم، مع مسبح خاص. يتوفر نظام منزل ذكي مثبت في جميع الوحدات، مما يسمح لك بضبط الإضاءة ودرجة الحرارة وميزات الأمان والمزيد بسهولة.",
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
				Duration: "5",
				Place: {
					en: "IMG Worlds of Adventure",
					ar: "آي إم جي عالم من المغامرات",
				},
				Image: img,
			},
			{
				Duration: "5",
				Place: {
					en: "Dunecrest American School",
					ar: "مدرسة ديونكريست الامريكية",
				},
				Image: dunecrest,
			},
			{
				Duration: "8",
				Place: { en: "Global Village", ar: "القرية العالمية" },
				Image: global,
			},
			{
				Duration: "30",
				Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
				Image: dxb,
			},
			{
				Duration: "20",
				Place: { en: "Dubai Downtown", ar: "وسط دبي" },
				Image: downtown,
			},
			{
				Duration: "20",
				Place: { en: "Mall of Emirates", ar: "مول الإمارات" },
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
			ar: "مشروع أوكسفورد حيث تلتقي الجودة و التصاميم الفريد",
		},
		HeaderImage: projectTwoHeader,
		InfoTitle: {
			en: "Earth's natural elements come to life within its architecture",
			ar: "العناصر الطبيعية للأرض تتجسد في هندستها.",
		},
		InfoSubTitle: {
			en: "This remarkable residential project offers an exquisite blend of nature-inspired design, with a total of 434 units spread across basement, ground, and 5 floors, luxurious living, and an array of amenities to ensure a comfortable lifestyle.",
			ar: "يقدم هذا المشروع السكني الرائع مزيجًا فريدًا من التصميم المستوحات من الطبيعة، حيث يتكون من مجموع 434 وحدة موزعة على الطابق السفلي والأرضي و5 طوابق أخرى. إنه عرض فاخر للعيش ومجموعة من وسائل الراحة لضمان نمط حياة مريح. ",
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
				Duration: "20",
				Place: { en: "Global Village", ar: "القرية العالمية" },
				Image: global,
			},
			{
				Duration: "18",
				Place: { en: "Dubai Marina", ar: "دبي مارينا" },
				Image: marina,
			},
			{
				Duration: "25",
				Place: { en: "DWC Airport", ar: "مطار آل مكتوم الدولي" },
				Image: dwc,
			},
			{
				Duration: "25",
				Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
				Image: dxb,
			},
			{
				Duration: "30",
				Place: { en: "Dubai Downtown", ar: "وسط دبي" },
				Image: downtown,
			},
			{
				Duration: "20",
				Place: { en: "Mall of Emirates", ar: "مول الإمارات" },
				Image: moe,
			},
		],
		Video: DubaiVideo,
	},
];
