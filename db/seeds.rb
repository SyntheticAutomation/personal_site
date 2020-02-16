experience_1 = Experience.create(
  company: "DISH Network", 
  role: "IT Support Technician I", 
  date_range: "Oct 2019 to current", 
  location: "Englewood, CO", 
  image_url: "https://pmcdeadline2.files.wordpress.com/2019/11/dish-featured-image.jpg?w=681&h=383&crop=1", 
  icon: "fas fa-headset",
  description: "My team at Dish works on resolving technical problems of all shapes and sizes for over 50,000 employees across 3 continents. 
  I assist users with resolving account lockouts and password resets, verifying proper hardware/software configuration, and diagnosing connection issues. 
  I work hard to set a high standard as the team's fastest average resolution time (6 minutes) and a consistent 5/5 feedback rating from employees that reach me for help."
)
experience_2 = Experience.create(
  company: "BugCrowd",
  role: "Freelance Ethical Hacker",
  date_range: "Jan 2019 to current",
  image_url: "https://pbs.twimg.com/profile_images/1151730895910424578/Gu-TYdru_400x400.png",
  icon: "fas fa-bug",
  description: "I taught myself how to conduct penetration tests and am adding more and more hacks to my vocabulary. 
  Everything from broken access control, XXE, Cross-Site Scripting, DDoS attacks and more. As the technology and vulnerabilities across the web change, 
  I continue to learn more methods to secure web applications for companies that participate in the open bug bounty programs. 
  This has been a rewarding and fulfilling way to get involved in the whitehat community."
)
experience_3 = Experience.create(
  company: "Turing School of Software & Design",
  role: "Graduate: Backend Engineering Program",
  date_range: "Oct 2018 to Apr 2019",
  location: "Denver, CO",
  image_url: "https://i.vimeocdn.com/portrait/8477407_640x640",
  icon: "fas fa-laptop-code",
  description: "After deciding to get started in tech, I enrolled in Turing's 7-month immersive program. The Backend Engineering curriculum focused on object-oriented programming principles, 
  test-driven development, engineering backend databases and running SQL queries through ORMs, writing clean code, using good documentation and AGILE, 
  and building proficiency in various programming languages such as Ruby, SQL, CSS, JS/jQuery/nodeJS."
)

experience_4 = Experience.create(
  company: "Evolve Vacation Rental",
  role: "Travel Advisor",
  date_range: "Aug 2017 to Sept 2018",
  location: "Denver, CO",
  image_url: "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/52786730_2566707123345957_1019225593658474496_n.jpg?_nc_cat=1&_nc_ohc=QqCSTOIn7NkAX8Q2R6v&_nc_ht=scontent-den4-1.xx&oh=6c5bf3d2f6c43bf44ec4177c780ea13f&oe=5ED7F295",
  icon: "fas fa-home",
  description: "My day to day as a Travel Advisor involved screening applicants for our vacation homes and ensuring the travelers would be a good fit for the property. 
  I engaged with callers and online ticketing systems through SalesForce, 
  to find a suitable vacation home for them and make the sale. 
  At Evolve I quickly became the go-to tech person for multiple teams and was able to resolve hardware and software issues for hundreds of users, face to face. 
  This saved a tremendous amount of tickets from our outsourced IT team who were constantly dealing with high volume."
)

experience_5 = Experience.create(
  company: "GroundSwell Cannabis Boutique",
  role: "Retail Manager",
  date_range: "Sep 2016 to May 2017",
  location: "Denver, CO",
  image_url: "https://iovia.org/wp-content/uploads/GS_logo_2015_full_color.png",
  icon: "fas fa-leaf",
  description: "Although this was a transition role to give me time to figure out what was next in my life, I still found amazing value in working here. 
  GroundSwell's philosophy is to treat every customer like a patient, explaining the therapeutic uses of each of the high-quality products. 
  By creating a unique and outstanding experience for our customers, I lead the store to receive Leafly's Award for the Top Dispensary in Colorado. 
  It was here that I realized my passion for computing - my favorite part of the job was getting to present store performance metrics to the executive team."
)


experience_6 = Experience.create(
  company: "Denver Family Institute",
  role: "Intake Coordinator",
  date_range: "Aug 2016 to Oct 2016",
  location: "Denver, CO",
  image_url: "https://cdn0.sussexdirectories.com/rms/rms_photos/sized/41/79/147941-1101346-2_320x400.jpg?pu=1508255568",
  icon: "fas fa-users",
  description: "Back when I was applying to grad school and thinking I would become an LMFT (marriage and family therapist), 
  I saw this internship as a great stepping-stone. 
  I worked directly with licensed mental-health professionals, observing live therapy sessions, managing documentation and assisting with community outreach projects."
)

experience_7 = Experience.create(
  company: "Devereux Advanced Behavioral Health",
  role: "Direct Care Professional",
  date_range: "May 2016 to Aug 2016",
  location: "Westminster, CO",
  image_url: "https://yt3.ggpht.com/a/AGF-l78vvwSgbb0VvVleZmtnCV8LAp4ptDY9uqyVnA=s900-c-k-c0xffffffff-no-rj-mo",
  icon: "fa fa-shield",
  description: "Devereux was an eye-opening experience because I worked directly with kids and teens with mental illness and trauma-backgrounds, that are rejected by the US juvenile detention system. 
  They have a very specific treatment plan that helps teach them social skills, self-care, responsibility, and communication strategies.
  I was assigned the teen boys' autism clinic and it was my job to assist with hands-on escalations by using federally-approved restraining methods and self-defense. Wherever possible,
  it was my job to use verbal de-escalation skills to reduce the need for restrictive interventions."
)

experience_7 = Experience.create(
  company: "East Carolina University",
  role: "B.A. Psychology",
  date_range: "Aug 2011 to May 2015",
  location: "Greenville, NC",
  image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/East_Carolina_University_seal.svg/1200px-East_Carolina_University_seal.svg.png",
  icon: "fa fa-graduation-cap",
  description: "I look back at my time at ECU as invaluable. These four years pushed me well beyond what I thought I was capable of. I learned the power of public speaking, argumentation, compassion, empathy, and time management. 
  While completing my minor in linguistics, I received the department's only 'Outstanding Performance in German Studies' award in 2012, which motivated me to study abroad in Stuttgart for a year.
  I published several research papers on Linguistics and Psychology which facilitated my understanding of language and human thought."
)

skills = [
  "Object-oriented Programming", 
  "Active Directory", 
  "Javascript", 
  "Virus Remediation", 
  "Agile Methodology",
  "API Development",
  "OWASP Top 10",
  "Full Stack Engineering",
  "UI/UX",
  "Mac / Windows / Linux OS",
  "World-Class Customer Service",
  "Social Engineering",
  "Bash / command line",
  "Git workflow",
  "Vulnerability Scanning",
  "REST API"]

skills.sort.each do |s|
  Skill.create(name: "#{s}")
end