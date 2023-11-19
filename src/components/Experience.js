import React from "react";
import colorSharp from "../assets/img/color-sharp.png";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn experience_bottom_space">
              <h2>Experience</h2>
              <p style={{ color: "#B8B8B8" }}>
                I have done more than 5 <b>Internships</b> as a{" "}
                <b>
                  Software Engineer Intern, Web Developer && Web Designer
                  Intern.{" "}
                </b>
              </p>
              <hr style={{ color: "white" }} />
              <div className="experience_box">
                <h4 style={{ color: "#b392f0" }}>
                  Software Engineer Intern (<i>Aug 2022 - Nov 2022</i> )
                </h4>
                <h5>
                  ConsultIT (<i>Greater Noida, India</i>)
                </h5>
                <div className="role_points_img">
                  <div className="role_points">
                    <p>
                      • Performed the addition of JWT, backend data
                      manipulations, and AWS - cloud platform.
                    </p>
                    <p>
                      • Build web-projects with React.js based on CRUD
                      operations and backed the code with github.
                    </p>
                    <p>
                      • Based on Dijkstra’s algorithm, added functionality in
                      website to find shortest route between two end points.
                    </p>
                  </div>
                  <div className="">
                    <img
                      className="role_points_pic mb-3"
                      src="https://media.licdn.com/dms/image/C510BAQF5IFvEOYfZtA/company-logo_200_200/0/1548091642894/consultit_logo?e=2147483647&v=beta&t=mPItso5ozSTcxZS6Sbwqz6qU6yOzIlAnlcTk6x29nrI"
                      alt="img_err"
                    />
                  </div>
                </div>
              </div>
              <hr style={{ color: "white" }} />
              <div className="experience_box">
                <h4 style={{ color: "#f672de" }}>
                  Web Developer Intern (<i>Jul 2022 - Sep 2022</i> )
                </h4>
                <h5>
                  Coretechtive (<i>Maharashtra, India</i>)
                </h5>
                <div className="role_points_img">
                  <div className="role_points">
                    <p>
                      • Created ParkMeSafe full-stack website using React.js for frontend design and react-routing and Node.js.
                    </p>
                    <p>
                      • Integrated the razorpay payment gateway for transaction functionality.
                    </p>
                    <p>
                      • Clustered the database in the single project and handled whole codebase by creating github organization.
                    </p>
                  </div>
                  <div className="">
                    <img
                      className="role_points_pic mb-3"
                      src="https://media.licdn.com/dms/image/C560BAQGofn3sBT5Ryw/company-logo_200_200/0/1624546650432?e=2147483647&v=beta&t=xFkFO2UOQx8vDiKne62xgaKLhrVZj9JGMSLyDA7k_NA"
                      alt="img_err"
                    />
                  </div>
                </div>
              </div>
              <hr style={{ color: "white" }} />
              <div className="experience_box">
                <h4 style={{ color: "#7ce683" }}>
                Frontend Web Dev Intern  (<i>Jul 2023 - Aug 2023</i> )
                </h4>
                <h5>
                OctaNet (<i>Remote</i>)
                </h5>
                <div className="role_points_img">
                  <div className="role_points">
                    <p>
                      • Lead the team of Designing and Development members.
                    </p>
                    <p>
                      • Updated the code in version control using GIT and Github.
                    </p>
                    <p>
                      • Created a frontend landing page, Portfolio, and sliding component in HTML5 and CSS3.
                    </p>
                  </div>
                  <div className="">
                    <img
                      className="role_points_pic mb-3"
                      src="https://media.licdn.com/dms/image/D4D0BAQHfkwxGPFlZlg/company-logo_200_200/0/1698238296991?e=2147483647&v=beta&t=1fkqjx_W5TYZUJsRMDXXcyIYuFNkIc8XyjLQqEBaNRw"
                      alt="img_err"
                    />
                  </div>
                </div>
              </div>
              <hr style={{ color: "white" }} />
              <div className="experience_box">
                <h4 style={{ color: "#eb565b" }}>
                Web Dev & Design Intern  (<i>Aug 2023 - Sep 2023</i> )
                </h4>
                <h5>
                Oasis Infobyte  (<i>Remote</i>)
                </h5>
                <div className="role_points_img">
                  <div className="role_points">
                    <p>
                      • Checked the code of my team members and helped in creating API’s
                    </p>
                    <p>
                      • Fetched the data from the API’s and displayed the same in the frontend.
                    </p>
                    <p>
                      • Integrated the Carousal functionality for different front-end page.
                    </p>
                  </div>
                  <div className="">
                    <img
                      className="role_points_pic mb-3"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxARDxAQERAWFQ4RDREQEA0VDQ8QEA4SFhEWFxYYGR8YHSojHSAxHx8fITEhMSouLi8uIys0ODMsQzQ5OisBCgoKDg0OFhAQFisdGx0tNzcrKzEtNy0uNysxMzcvKzctLSsxNy03KystKysuKy0rKy0tKy0tKy0tLTc3LSs3N//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIHAf/EADcQAAICAQIDBgMGBQUBAAAAAAABAgMEBRESITEGEyJBUWEUMnFSYoGRobEHI0LS8DOCosHhFf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgICAgMBAAAAAAAAAAABAhESMQMhE0EiMnFh/9oADAMBAAIRAxEAPwD5UAD7L5oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2xcWdkuGEXKXogOINVgdkd9ndZt9yO37su6OzGIutbl7uc/8Ao3PHa5ZebGPnQPpU+zGG1/pbe6nPf9WVOf2Nr61WNP7MtpL80PjqY+fGsWCZqGmW0PayOy8pLnF/iQzHTtLvoAAAAAAAAAAAAAAAAAAAAAAD1XByaiuraSX1AlaXp8rp7LlFfNL0RsqFTjVpcor85Tf4dWVSvjjwjTWuK6X9K836slY9Mak77572bfM+kPaKO+M05Z+1lLUHCDtnBxrXltxT+rXkV8u18W1GuqUpN7LeSju2/bcodS1WzJkq4JqDe0a11l9diz0fQ51Wd5JKTjXxQW7S43y239icrb6Y4YybrYQsey35Pbml0T2PM5mK1HtLkqUoJRg09nttN/myBiXX5N0ITsk4t7yXE9lFc3yL8k6jM8N7rdZEYzi4yScWuaezTMTrujul8cOdTf4w38jZNpLZdEtkvoR8iKlFxkt4tbNfU3ljuLhbi+egk6hiuqyUPJPdP1RGPLfT0gAAAAAAAAAAAAAAAAAAErT7FCTntu4raC9ZPkRSw0WlSs4n0gt/xNY+6i3walTGV1r/AJkucpPy38kU+ZlWZNiST232hWvIapmO2fDH5E9or7T9S70jBVUd3/qNc36ex0/a6nSde0rR9OjRHfrY1zl6eyIGua71qqftKxfsjhrWr9aq3y6SmvP2RT4mLK2ajFc/N+SXqMstfjizMfumLjTtlwwW76/T6mg7OYk41ztWysl4Y8Se2yfPp7/sWGBiwohsuvWU35lLq+sb711codJSX9X09hxmHulty9Ryy9dyOJx4orZ7eFJrl7kSOVfbJR7yTcnttxPbmRqqpSe0U29t39C67P4uydr8/DH/ALZjHeVa1I/NdxFGutr+jwN+u/8An6lGafWudM/wf/JGYL5ZqrAAHNQAAAAAAAAAAAAAAAAk49/DXYl1lwpfruRgJdC20PG594/LlH6+pJ1jUOFcEX4mub+yj9haq6U/SC5eraKKTlOW/WUn+52t446hp6x6JWSUYrm/0NThY8KYbL6ym/PYi6djKqP3nzkyt1XUXN8EX4F1f2iyTCbvaWbe9W1V2bwg9oeb+1/4Q8HClbLZco+cvJHvT8F2Pd8oLq/X2Rdu2NaVcF4vKPp7szjjcvdOunbGxoVx4Yrr8z85HuCUUorkktkjnBtLm935sOZ6JNGkbWLP5MvfZfqjOFrrd3yw/wBz/YqjzeW7yUABzAAAAAAAAAAAAAAAAAAASr8nirhHzXX8OhI0epbub8uS/IrSx0u9JOL9d1+R0wu8vax21XL2XAnzfzP29CDg4rsl91fMzjZJyk35t/uW3Eqq+XVfq2Wfld3odcjJ4Eq6143yivsnTFp4Fze83zlL1IenV9bJc5S8/Ym8R2x9+6sjq5HK+9Ri2+iOV2RGK3b/AA9Soyslzft5ImecxL6c7rHKTk+rZ4APKyAAAAAAAAAAAAAAAAAAAAAATAAEm/K44pNc099/J8iMCy2G0zHzuGOzW+3RizUJPokvfqQwXndaXdfs5Nvdvd+p+AGbUAAAAAAAAAAAAAAAAAAAAAA74FHeXVV9FO2EG/TikkcDvgXqu6qzbdQthNr14ZJkvSx9X7ZdsVpeXLAxcDF7mmqvZzpcpScoKXk16lV25nVmaNh6p8PXTkyy5Y9ndQ4YzjtZ/auvqy27Zdjf/qZcs/Fz8XubqqmlO5xknGtR/pT9Cp7c11YejYemfEV25McuWRZ3U+KMI7Wf3Lr6M8mPH8dd/bvd+99K7+E2kV25dmVek8TBolkWcSTjxbPh33+jl/tJf8U8Sq+rC1fHgo05dfBbFJeC+O/Xbq+TW/3C40bUMHS9Eprya3fPUXK26iuxKSr2TipNNNLbh5e7IfZnLxs7D1XTILuq3KWZp9dli3re6fBu/fZfSTLyvPl9RNTjpy/g/jJ1apfDHhdmU49fw1U4KSbkrG1s/VqP+MsNY17Wlj3d7otEKnVNTsWJNuuLi05fP5epkewGj5l87p4mbDFnUoRlKeROl2Kbk9lwrn8v7H0rQcfMwllXajqtV+L8FbFVfFTs8bcWntNLyTXL1J5NTO3tcP1kYjsjRB6BrMnCLnGVHDJxTlHxLozQ9jYW0aFTkYODVk5lubONynUptQXGt+TT5bR5e5nuyN8FoGsxckpSdHDFySlLxLotz12J7P6lZiq7F1SvHqsnLeh5dtUuJPh3cYrbyLn1f6mP1/Hvt1rGpzxO7y9Lqx6ZWR/nwxpxalF7pb8TS3PnZ9h7T99jaFl0Z2fXk5N2RV3HDe7ZKKnW2vEt/KXt+Z8eOvhvpjydgAOzmAAAAAAAAAAAAAAAAAEjT6lO6qEvllbCMl7OSTAjg3GH2axbLNVpbcLKtQjiYVjm+CE5TyOCM/Z92o7+W+5QS0tRwb7ZxccirUKcdp7rgUqrnKLXrvFHOeSNcapga7tZi4uPdkY1WBJcEuCGS8i982l4tnyPGqV4GFdLEniyvsq2hkZDyp1PvNk5qtR5JJ8ufFvsOf8AhxZQG0w+zVMMnNh3U8murT68vFrTnGdsbZ0OG/Bz3UJvfbzRzy9Nwq/g7b8e3HVuRZVfhytm5xpUY8N8OJKSScnye+/CPki8ax4NRdoUMKF9mZDvJLIVGLUrJQjeo8M7Ld48+DgcUvea9DrqLwIYWNfHA2nkPJjt8Ze1W63BJrfr836F5pxZIG11DSaqaaHDS7blZp1F88tWZPApzq4pPwrh5GKLjltLNAANIAAAAAAAAAAAAAAAAEjT7FC6qcntGNsJSfPopJvoRwBptV1emcdVUJ88nVKsinwyXHXGWS2+fT549fU7612goydNSk2tQnl0SyFwvhuVVNsFdv8AaalFNeq38zJA5/HGuVabtf2nuyMrI7rKulhzsThU7rVXwpLbwN7dV6HTVng5t8suWYqJ3NTyMaWNfZONmy4+7cFwyTe7W7j1MqC8J9HKtpj9oKLcjObtePVbp1eHizlGycoRqnQocXdpvdxg2/dkDXNQp+CqxY5Esq2OVK74hwsjGmt1qPdw7zxPd+J8kuSM0BMJKcqu+0uqRvhgKM3LuNOromnxeCcbLHst/uuJ41HOrng4NMXvbTPKdkdn4VZKtx5+fRlOC8Ym2w1XKx76sdx1Lu3Xp2PRPGdWX88KlGS8MeHmY8ASaLdgANIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k="
                      alt="img_err"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  );
};

export default Experience;
