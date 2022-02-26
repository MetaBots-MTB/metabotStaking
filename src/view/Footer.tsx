import telegram from 'img/svg/telegram.svg';
import facebook from 'img/svg/facebook-g.svg';
import twitter from 'img/svg/twitter-g.svg';
import linkedin from 'img/svg/linkedin.svg';


function Footer() {
  return (
      <div className="copyright-bar">
        <span
          >MetaBots © P2E Game. Powered by <i>Passive Income ©</i>. All rights
          reserved.</span
        >
        <span>
          <ul>
            <li>
              <a target="_blank" href="https://twitter.com/MetaBotsP2E"
                ><img className="icon-footer" src={twitter}
              /></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/metabots%C2%A9-p2e"
                ><img className="icon-footer" src={linkedin}
              /></a>
            </li>
            <li>
              <a target="_blank" href="https://t.me/Metabots"
                ><img className="icon-footer" src={telegram}
              /></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/Meta-Bots-107048061835892"
                ><img className="icon-footer" src={facebook}
              /></a>
            </li>
          </ul>
        </span>
      </div>

  );
}

export default Footer;