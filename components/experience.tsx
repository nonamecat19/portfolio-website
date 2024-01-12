"use client";

import React, {Fragment} from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

	const isLight = theme === "light"

	return (
		<section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
			<SectionHeading>My experience</SectionHeading>
			<VerticalTimeline lineColor="">
				{experiencesData.map(
					({
						title,
						location,
						company,
						type,
						stack,
						paragraphs,
						icon,
						date,
					 }, index) => (
						<Fragment key={index}>
							<VerticalTimelineElement
								contentStyle={{
									background: isLight ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
									boxShadow: "none",
									border: "1px solid rgba(0, 0, 0, 0.05)",
									textAlign: "left",
									padding: "1.3rem 2rem",
								}}
								contentArrowStyle={{
									borderRight:
										theme === "light"
											? "0.4rem solid #9ca3af"
											: "0.4rem solid rgba(255, 255, 255, 0.5)",
								}}
								date={date}
								icon={icon}
								iconStyle={{
									background: isLight ? "white" : "#04785720",
									color: "#34d399",
									fontSize: "1.5rem",
									border: "4px solid #10b981"
								}}
							>
								<h3 className="font-bold capitalize text-xl mb-2 text-emerald-700 dark:text-emerald-500">
									{title}
								</h3>
								<p className="font-normal !mt-0">
									{company} ▼ {type}
								</p>
								<p className="!mt-0 !mb-1">
									Tech stack: <strong className="text-emerald-700 dark:text-emerald-400">{stack}</strong>
								</p>
								{
									paragraphs.map((paragraph, index) => (
										<p key={index} className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
											<strong className="text-emerald-700 dark:text-emerald-400">►</strong>{paragraph}
										</p>
									))
								}
								<span className="absolute right-0 top-0 bg-emerald-800 py-1.5 px-3 rounded-bl-2xl text-white">
									{location}
								</span>
							</VerticalTimelineElement>
						</Fragment>
					),
				)}
			</VerticalTimeline>
		</section>
	);
}
