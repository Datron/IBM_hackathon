if(msg.payload.top_class == "PrivateSchools")
    {
        msg.payload ="@"+msg.sender + "Top Private Schools "+"1. Daly College,Indore " +"2. Delhi Public School, Delhi " +"3. Modern School, Delhi";
    }
else if(msg.payload.top_class == "CommerceColleges")
    {
         msg.payload ="@"+msg.sender + "Top Commerce Colleges "+"1. Shri Ram College of Commerce " +"2. Lady Shri Ram College For Women " +"3. Loyala College, Chennai";
    }
else if(msg.payload.top_class == "EnggineeringColleges")
    {
         msg.payload ="@"+msg.sender +"Top Engineering Colleges " +
                        "1. IIT, Bombay " +
                        "2. IIT, Madras " +
                        "3. IIT, Delhi";
    }
else if(msg.payload.top_class == "MedicalColleges")
    {
         msg.payload ="@"+msg.sender + "Top Medical Colleges " +
                        "1. AIIMS, New Delhi " +
                        "2. Christ Medical College, Vellore " +
                        "3. Armed Forces Medical College, Pune";
    }
else if(msg.payload.top_class == "LawColleges")
    {
         msg.payload ="@"+msg.sender +"Top Law Colleges " +
                        "1. National Law School Of India, Bangalore " +
                        "2. Rajiv Gandhi School of Intellectual " +
                        "3. Modern School, Delhi";
    }
else if(msg.payload.top_class == "IITCoaching")
    {
         msg.payload ="@"+msg.sender + "Top IIT Coaching " +
                        "1. Vibrant Academy " +
                        "2. Resonance" +
                        "3. Bansal classes";
    }
else if(msg.payload.top_class == "GovernmentSchools")
    {
         msg.payload ="@"+msg.sender + "Top Government Colleges " +
                        "1. Indian Institute of Technology Kharagpur " +
                        "2. Indian Institute of Technology Guwahati " +
                        "3. Indian Institute of Technology BHU";
    }
else if(msg.payload.top_class == "PMTCoaching")
    {
         msg.payload ="@"+msg.sender + "Top PMT Coaching " +
                        "1. Aakash Institute " +
                        "2. Allen Career Institute " +
                        "3. Brilliant Tutorials";
    }
else if(msg.payload.top_class == "CPTCoaching")
    {
         msg.payload ="@"+msg.sender + "Top CPT Coaching " +
                        "1. Topper Institute" +
                        "2. Ajay Jain Institute " +
                        "3. AKN institute od CA";
    }
else if(msg.payload.top_class == "IASCoaching")
    {
         msg.payload ="@"+msg.sender + "Top IAS Coaching " +
                        "1. Rau's Study Circle for IAS, Delhi   " +
                        "2.Brilliant Tutorials Pvt. Lmt., Chennai  " +
                        "3.Brain Tree India, Hyderabad ";
    }
else if(msg.payload.top_class == "BoardingSchools")
    {
         msg.payload ="@"+msg.sender + "Top Boarding Schools " +
                        "1.  Sahyadri School, Pune " +
                        "2.  Rishi Valley School, Chittoor " +
                        "3. Lawrence School, Sanawar";
    }
else if(msg.payload.top_class == "DanceAcademies")
    {
         msg.payload ="@"+msg.sender + "Top Dance Academies " +
                        "1.  Skidmore College " +
                        "2.  Juilliard " +
                        "3.  Mason Gross School of the Arts";
    }
else if(msg.payload.top_class == "ArtSchools")
    {
         msg.payload ="@"+msg.sender + "Top Art Schools " +
                        "1.  Royal College of Art " +
                        "2.  Parsons The New School for Design " +
                        "3.  Rhode Island School of Design RISD";
    }
else if(msg.payload.top_class =="Movies")
    {
         msg.payload ="@"+msg.sender + "Top Movies of all time " +
                        "1.  The Wizard of Oz " +
                        "2.  The Third Man " +
                        "3.  Citizen Kane";
    }
else if(msg.payload.top_class =="Songs")
    {
         msg.payload ="@"+msg.sender + "Top Songs of all time " +
                        "1.  THE TWIST,Chubby Checker" +
                        "2.  SMOOTH,Santana Featuring Rob Thomas" +
                        "3.  MACK THE KNIFE,Bobby Darin";
    }
else if(msg.payload.top_class =="Singers")
    {
         msg.payload ="@"+msg.sender + "Top Singers of all time " +
                        "1.  Aretha Franklin " +
                        "2.  Ray Charles " +
                        "3.  Elvis Presley";
    }
else if(msg.payload.top_class =="Actresses")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1.  Daly College,Indore " +
                        "2.  Delhi Public School, Delhi " +
                        "3.  Modern School, Delhi";
    }
else if(msg.payload.top_class =="Actors")
    {
         msg.payload ="@"+msg.sender + "Top Actors of All Time " +
                        "1. Jack Nicholson " +
                        "2. Marlon Brando" +
                        "3. Robert De Niro ";
    }
else if(msg.payload.top_class =="MusicDirectors")
    {
         msg.payload ="@"+msg.sender + "Top Indian Music Directors of all Time " +
                        "1. A.R. Rehman   " +
                        "2. Ilaiyaraaja  " +
                        "3. RD. Burman  ";
    }
else if(msg.payload.top_class =="GuitarArtists")
    {
         msg.payload ="@"+msg.sender + "Top Guitarists of all time " +
                        "1. Jimi Hendrix  " +
                        "2. Duane Allman  " +
                        "3. B.B. King";
    }
else if(msg.payload.top_class =="TablaArtists")
    {
         msg.payload ="@"+msg.sender + "Top tabla Artists of All Time " +
                        "1. scd   " +
                        "2.  dcs " +
                        "3. dcs ";
    }
else if(msg.payload.top_class =="Soaps")
    {
         msg.payload ="@"+msg.sender + "Top  serials to watch in india  " +
                        "1.  Yeh Rishta Kya Kehlata Hai  " +
                        "2.  Taarak Mehta Ka Ooltah Chashmah " +
                        "3.  Saath Nibhaana Saathiya";
    }
else if(msg.payload.top_class =="RealityShows")
    {
         msg.payload ="@"+msg.sender + "Top Reality shows in India " +
                        "1.  Big Boss " +
                        "2.  Indian Idol " +
                        "3.  MTV Roadies";
    }
else if(msg.payload.top_class =="RomanticSongs")
    {
         msg.payload ="@"+msg.sender + "Top Romantic Songs " +
                        "1.  Sanam Re " +
                        "2.  Yeh Kaisi Jagah " +
                        "3.  Baatein Ye Kabhi Na";
    }
else if(msg.payload.top_class =="PartySongs")
    {
         msg.payload ="@"+msg.sender + "Top Party Songs Of all time " +
                        "1. Bang Bang  " +
                        "2. Aata Majhi Satakli " +
                        "3. Chaar Botal Vodka ";
    }
else if(msg.payload.top_class =="BestBooks")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1.  Daly College,Indore " +
                        "2.  Delhi Public School, Delhi " +
                        "3.  Modern School, Delhi";
    }
else if(msg.payload.top_class =="WorstBooks")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1.  Daly College,Indore " +
                        "2.  Delhi Public School, Delhi " +
                        "3.  Modern School, Delhi";
    }
else if(msg.payload.top_class =="FictionBooks")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1.  Daly College,Indore " +
                        "2.  Delhi Public School, Delhi " +
                        "3.  Modern School, Delhi";
    }
else if(msg.payload.top_class =="Biographies")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1.  Daly College,Indore " +
                        "2.  Delhi Public School, Delhi " +
                        "3.  Modern School, Delhi";
    }
else if(msg.payload.top_class =="Authors")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1.  Daly College,Indore " +
                        "2.  Delhi Public School, Delhi " +
                        "3.  Modern School, Delhi";
    }
else if(msg.payload.top_class =="BeautifulWomen")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1.  Daly College,Indore " +
                        "2.  Delhi Public School, Delhi " +
                        "3.  Modern School, Delhi";
    }
else if(msg.payload.top_class =="HottestWomen")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1. Daly College,Indore " +
                        "2. Delhi Public School, Delhi " +
                        "3. Modern School, Delhi";
    }
else if(msg.payload.top_class =="HottestMen")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1. Daly College,Indore " +
                        "2. Delhi Public School, Delhi " +
                        "3. Modern School, Delhi";
    }
else if(msg.payload.top_class =="SexiestMen")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1. Daly College,Indore " +
                        "2. Delhi Public School, Delhi " +
                        "3. Modern School, Delhi";
    }
else if(msg.payload.top_class =="Comedians")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1. Daly College,Indore " +
                        "2. Delhi Public School, Delhi " +
                        "3. Modern School, Delhi";
    }
else if(msg.payload.top_class =="HorrorMovies")
    {
         msg.payload ="@"+msg.sender+"Top Private Schools " +
                        "1. Daly College,Indore " +
                        "2. Delhi Public School, Delhi " +
                        "3. Modern School, Delhi";
    }
else if(msg.payload.top_class =="Fashion")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1. Daly College,Indore " +
                        "2. Delhi Public School, Delhi " +
                        "3. Modern School, Delhi";
    }
else if(msg.payload.top_class =="FashionsDesigners")
    {
         msg.payload ="@"+msg.sender+"Top Private Schools " +
                        "1. Daly College,Indore " +
                        "2. Delhi Public School, Delhi " +
                        "3. Modern School, Delhi";
    }
else if(msg.payload.top_class =="FashionColleges")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1. Daly College,Indore " +
                        "2. Delhi Public School, Delhi " +
                        "3. Modern School, Delhi";
    }
else if(msg.payload.top_class =="Shoes")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1. Daly College,Indore " +
                        "2. Delhi Public School, Delhi " +
                        "3. Modern School, Delhi";
    }
else if(msg.payload.top_class =="deodrants")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1. Daly College,Indore " +
                        "2. Delhi Public School, Delhi " +
                        "3. Modern School, Delhi";
    }
else if(msg.payload.top_class =="Jewellary")
    {
         msg.payload ="@"+msg.sender + "Top Private Schools " +
                        "1. Daly College,Indore " +
                        "2. Delhi Public School, Delhi " +
                        "3. Modern School, Delhi";
    }
    return msg;
