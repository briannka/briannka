
export const getIcons = () => {
    document.addEventListener("DOMContentLoaded", event => {
        let skycons1 = new Skycons({"color": "#3da4ab"});
        let skycons2 = new Skycons({"color": "#3EB890"});
        let skycons3 = new Skycons({"color": "#E8A723"});
        let skycons4 = new Skycons({"color": "#472A49"});
        let skycons5 = new Skycons({"color": "#65863A"});
        let skycons6 = new Skycons({"color": "#CC2027"});
        let skycons7 = new Skycons({"color": "#56B68B"});
        let skycons8 = new Skycons({"color": "#00AB6B"});
        let skycons9 = new Skycons({"color": "#146EB4"});
        let skycons10 = new Skycons({"color": "#E50914"});
        
        skycons1.add("icon1", Skycons.CLEAR_DAY);
        skycons2.add("icon2", Skycons.CLEAR_NIGHT);
        skycons3.add("icon3", Skycons.RAIN);
        skycons4.add("icon4", Skycons.SNOW);
        skycons5.add("icon5", Skycons.WIND);
        skycons6.add("icon6", Skycons.SLEET);
        skycons7.add("icon7", Skycons.FOG);
        skycons8.add("icon8", Skycons.CLOUDY);
        skycons9.add("icon9", Skycons.PARTLY_CLOUDY_DAY);
        skycons10.add("icon10", Skycons.PARTLY_CLOUDY_NIGHT);
        
        skycons1.play();
        skycons2.play();
        skycons3.play();
        skycons4.play();
        skycons5.play();
        skycons6.play();
        skycons7.play();
        skycons8.play();
        skycons9.play();
        skycons10.play();
      });
} 


