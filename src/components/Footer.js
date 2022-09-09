import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="upper__section">
        <div className="footer__logo">
          <img
            src="https://cypto-currency.vercel.app/static/media/logo.e44a93b92960b7a7a870e08a3080d60e.svg"
            alt=""
          />
        </div>
        <div className="quicklinks">
          <h2>Quick Links</h2>
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">About</a>
          <a href="/">Features</a>
          <a href="/">Contact</a>
        </div>
        <div className="resource__links">
          <h2>Resources Links</h2>
          <a href="/">Download Whitepapper</a>
          <a href="/">Smart Token</a>
          <a href="/">Blockchain Explore</a>
          <a href="/">Crypto API</a>
          <a href="/">Interest</a>
        </div>
        <div className="payments">
          <h2>We accept following payment systems</h2>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABACAYAAADlNHIOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUGSURBVHgB7Vw9TiNJGK1uGxssDJMSLBAgkayRyEEiXnOBHZ9guIEzMvYEzAlAiBhyJDiBlwAixGxAigVrsI1h37O6rK+LZnelme5PGn1PanVVdXWV+73vp8otdeQCHB8fl9bX18u9Xq9crVZjZ/hu9Pv917m5udHy8nI/iqI3eS3yhbe3t+js7Ky6sLAw5Qy54e7ubri1tTURYiwAye90OjWz+GJAj1hbW+tRhDHhtHwjvziQa3LOcry7uxtb2Cke5ByRpxTd3NxMwyVMAAWUSqVBXKlULPQooV6vl+OHh4eSM6jg/v4+NutXhgmgDBNAGSaAMkwAZZgAyjABlGECKMMEUIYJoAwTQBkmgDJMAGWYAMowAZRhAiij7HIGXkC34zjeyLoWRdF+r9c7zbhnG/d8EU2nT09P+9PT04e4p+EbB4NBczQaffN1vOKbn5qa2kGxiWMJxzyOLu7pvL6+nuLV637GXC3M1Uz6joG5mq4gRFdXV3WXM2ZmZhZxoghtvIhektfK5fIvj4+P3aD/Kfpt+jrKv4G8CwjwlxNEPT8/z/kyiNwB0W15XQIkdyB2yhAg2CIEuwz7DofDX6WweaKQEASL+objEBZLAlJk42Ebsk5SJPkg9Zbk07qdIJeE+jKtGP3+cB+QT2DMd4SC/HZWX4zXcAWh0BwAq+oiFBwEzWuyAqJ3ZB39D3mGp6RICQgNiTzB9d/pOTyjzjlPgj5OCh3MmdmeB3LPASFgqX8G9UZQ35Z1WPpYMJDyCeJM2lEfj0PPwD2L8h6Eps/BtFl5phXcR8+cT37DoisIha+CXl5eUpYorRCkbMiHR/mE4YtlCBGGqnEIqlQq78IOckVmaJHAeJ/FPOdOeMhHnpEHCheAYUiGDxI+OzvrLa8l+6J+IMqNcByeKRDzRDBNG2Je0spdBsI8AxygLj1znn1cAVDZB+BhU14Ar1hM2lPJVy5Rw9UTEuiEMISjL+EcFBbHV3jDVy+wuDf0kAscHdlQVCLWEuAiqG+ClG0ZfsI+gQd05dKVqyQm3AxPIFrwlkNfSVZT22LccZiDEaRyU1GJWEUAPNy5rJN4ENMM2vZ8OVwBcWMVjkkRQGQDQuyFQlBg5pdkLJIvPWLsjRmh8ef1gORhJxaHhyX5LVE/98mXSKx2giBepwAhKBzH6waXfAgLw0+LGz8emHdezLHmCoDaf0F4wHNRXgou/+tewVtqKIxHkphTXoK+9+EqKxlr0x8u7RmFJGI1ARh7P2i/5a45aAvDwZhcLCUZWi6ZaGu1WpME88x6uJSk14SrrP8CwlXueaDwjZgHkx4S77v2MPkStFq0y3sne4PEolvIK9xYMb9kjbmHvzy4+pFh7tbvsoO52qKcex5QE4B5AJuo89BSZfL1COJx1/9R9n8IIvnMC+GegEIn+SIFuUP+qQVIcEKr9WCYkMlX9hN95HUSyGTbSLzkE873bEOZ/6iecHXEjmjfSHa8fpx9l40D9k36dF3OKOTvaMPHsDdiyjABlGECKMMEUIYJoAwTQBkmgDJMAGWYAMowAZRhAijDBFCGCaAME0AZJoAyTABlxPyEojOogNzHtVrtxRlUwK/pxisrKyaAEvgp4xgvoEerq6sDZygU5Hzy5VxgYLmgOCRcj40+9fFunCrX19cVZ8gNSbQZ+I93T5ahbMDRPzo6+rtarQ7r9frIGX4IaPH8Si7I5we7U5+w/wdNvkepcyaUFQAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABACAYAAADlNHIOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUtSURBVHgB7ZzNTmJJFMcPFxBFgVHi10JaEz8WRhMTl7ZxZeJ0b4xxMeMLzPgG7tzZTyD9Aj0xRmNMmL3RnheAmOgG0pj4EV1A/AIRnf8hQNN0AxepW2W665eQC9zrBc6/6pyqc8qyURmbm5v2iYkJx93dncPlchmkaZh0Ov3k9Xqz/f39aZvN9lx6zlZ48vz8bNvb23P19vY6SWMZZ2dnmZmZmaIQOQHY+OFw2K1bvBy4R4yPj9+xCDmDc8vXxpcH25ptzs+N1dVVQ7sd+bDN4Xnstlgs1owuoQVQgN1ufzCampq061GEx+NxGNfX13bSKCGRSBi69StGC6AYLYBitACK0QIoRgugGC2AYrQAitECKMZBr4DDw0NfNBp9h5zUW7wce3p6eoOjj88hZfsFh7hhGBG32x2am5v7XO1eyDRO4W/e4zGGlwEkvN7kTyXx4HtFcK8QCk7/0ivAdnR05CFFsOHx+cvZbHaZ8gY3QdzpdK7Nz89/Kn0Thl/CYQWGD5i5CYSJ49qDTCazhs+PkyKUCbCzs7OMH79C5g1fTrynp+f32dlZH4z5Md/i64aFwGENve8TKUCJC9ra2grCzSxRYwSQzv0vmUySD9ALyfeYYHNzcyCVSq2RZKQHYUHGp76+PkKR23d1deVjEQSwAhGCJBmpAmxvb38QYXy/30+BwFdXDxHo/v6eBLAEET6QRKQJAJ+/lA+2DYFgyy3/u/fPz88J4pIAlnkkRZKQIsD+/n4gH3Abhls+Wul377PxuScI4mNbW9uL40o9SBHg8vKS3Y6p4WE1uPV3dXVVPI/qHj0+PlKjcGBGg2m4t5pBigBwPQ37fabU71cCZT4SAUT4OQTY3d19TwJaP9PR0VHzGu4FgvDJiAWWCwCXIORHeL1ecjhqT1s4FmBSRSLglAZZjOUCwCAvmqGW09raavpaQUNSMpvWaATLBcBUf5wEUI8AIgIxg8Yj5LtXQ0YQljKcK0XQfIB7gOXfXdcDqvNTCCAkUVMPhqD1ZvlMqaVYLgC6sZAfUc/IxsxoyQwQ8gtZjAwBwiQAVLBMX8szZhGgB0TIYiwXADn7zySAelLOLS0tJAL0gAOyGMsFQN4+RALiAA8tzYjg8Ygp8HEtWkbd2HIBJicnk+gFQsp9JycnNa8RJQDcj5CeWwspw9DOzs51EtALuAdU6wWcphbhftD6E3hIKU9KEWB6ejqOXrBOAojFYhXPdXd3kwgwkQsinSFlpYS0idjCwsIaLwOhBrm9vf2hCO3t7aKGnyEMeaUV56XOhAcGBv7ML7RqiNPTU/6H5+JrNr6ZVHUt+LtBxL9JIlIF4IAMN/FOhAjRaDQXlEUZH4ThJqdubm6kztyl54I4HiwuLo4JiAkJlDr/8Pv9fwkQdD2VSkk3PqN0aSIX6y8uLoIY8r2t488STqczODw8vD46OpozGEY+vAaUi/51lT45JiHg8qo4KUPOH34HlQIUYCHQmpdhxKkKOXgeFkZg+NDQ0NA/BcOXw0LgwBU4FmIM9/ut9DwPL3GI4DPY4AcqDV/gVQhQDgtSeA4Xk6xk8Frw0hIMJ4spZZWLcCvxKgX4ldAFGcVoARSjBVCMFkAxWgDFaAEUowVQjBZAMQZvoUgaJbDtDbfbLWYhpaZueDddY3BwUAugCN7K2ECGMDsyMvJAGqmwzYs754IHHQvkkbd1rtF/s3k3Dk3Hx8dNpLGMvLd5KGzeXRyG8ht4pDc2Nm5dLlfG4/FkSSMEbvG8Sy6Mzxt2f7OF/f+nHvhWb6AizwAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </div>
      <div className="lower__section">
        <p>© 2022 CRAPPO. All rights reserved.</p>
        <div className="icons">
          <a href="/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
            </svg>
          </a>
          <a href="/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              t="1569683925316"
              viewBox="0 0 1024 1024"
              version="1.1"
              pId="14972"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <path
                d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"
                pId="14973"
              ></path>
              <path
                d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"
                pId="14974"
              ></path>
            </svg>
          </a>
          <a href="/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
            </svg>
          </a>
          <a href="/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
            </svg>
          </a>
          <a href="/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
