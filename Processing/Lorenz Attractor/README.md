# Lorenz Attractor Visualisation
The lorenz attractor was first studied by Ed N. Lorenz, a meteorologist around 1963. It was derived from a simplified model of convection in the earth's atmosphere. It also arises naturally in models of lasers and dynamos. The system is most commonly expressed as 3 coupled non-linear differential equations.
<p align="center">dx / dt = a (y - x)</p>

<p align="center">dy / dt = x (b - z) - y</p>

<p align="center">dz / dt = xy - cz</p>
The set of constants used in this visualisation are a=10, b=28 and c=8/3. It is an example of deterministic chaos as the Lorenz system is sensitive to the initial conditions, two initial states no matter how close will diverge, usually sooner rather than later. In this visualisation there are 100 points with y and z coordinates of 0 and x coordinates of a random decimal in the range [0.011, 0.012]. Optimal coordinates for a point to start with are (0.01, 0, 0) and despite all 100 points starting off virtually at the same point, they later diverge to create the patterns shown below.<br/><br/>
Each point is a white dot with a spectrum colour trail to show its movement in regards to change in t.
<p float="left">
  <img src="https://github.com/David-Sangojinmi/Projects/blob/master/Processing/Images/lorenz_1.png" width="400" height="417.8"/>
  <img src="https://github.com/David-Sangojinmi/Projects/blob/master/Processing/Images/lorenz_2.png" width="400" height="417.8"/>
  <img src="https://github.com/David-Sangojinmi/Projects/blob/master/Processing/Images/lorenz_3.png" width="400" height="417.8"/>
  <img  src="https://github.com/David-Sangojinmi/Projects/blob/master/Processing/Images/lorenz_4.png" width="400" height="417.8"/>
</p>
