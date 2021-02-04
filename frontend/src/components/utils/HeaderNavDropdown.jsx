import { Dropdown } from "react-bootstrap";
import Link from "next/link";

import IconAccounts from "../../../public/static/images/icon-accounts.svg";
import IconBlocks from "../../../public/static/images/icon-blocks.svg";
import IconTransactions from "../../../public/static/images/icon-transactions.svg";
import IconNodes from "../../../public/static/images/icon-nodes.svg";

const HeaderNavItem = ({ link, imgLink, text }) => {
  return (
    <Link className="header-nav-item" href={link}>
      <a className="header-nav-item">
        {imgLink}
        <span className="nav-text">{text}</span>
        <style jsx global>{`
          .header-nav-link,
          .header-nav-link:hover {
            text-decoration: none;
          }

          .header-icon {
            width: 16px !important;
            margin-right: 3px;
          }

          .header-nav-link:hover .header-icon {
            stroke: #00c1de;
          }

          .nav-text {
            letter-spacing: 2px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            margin-left: 10px;
          }

          .header-nav-item {
            display: block;
            color: #a5a5a5;
            padding-top: 10px;
            padding-bottom: 15px;
            padding-left: 18px;
            text-decoration: none;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }

          .header-nav-item:hover {
            background: #000000;
            color: white;
          }
        `}</style>
      </a>
    </Link>
  );
};

export default () => (
  <Dropdown>
    <Dropdown.Toggle className="chain-header">
      Explore
      <img src="/static/images/down-arrow.svg" className="dropdown-arrow" />
    </Dropdown.Toggle>
    <Dropdown.Menu className="header-dropdown-menu">
      <HeaderNavItem
        link="/accounts"
        imgLink={<IconAccounts className="header-icon" />}
        text="Accounts"
      />
      <HeaderNavItem
        link="/blocks"
        imgLink={<IconBlocks className="header-icon" />}
        text="Blocks"
      />
      <HeaderNavItem
        link="/transactions"
        imgLink={<IconTransactions className="header-icon" />}
        text="Transactions"
      />
      <HeaderNavItem
        link="/nodes/validators"
        imgLink={<IconNodes className="header-icon" />}
        text="Nodes"
      />
    </Dropdown.Menu>

    <style jsx global>{`
      .chain-header {
        color: #000000;
        background: #ffffff;
        border: none;
        font-weight: 500;
        width: 100%;
      }

      .chain-header:hover,
      .chain-header:focus,
      .chain-header:active,
      .show > .btn-primary.dropdown-toggle {
        background: #ffffff !important;
        color: #000000 !important;
        border: none;
      }

      .dropdown-toggle::after {
        content: none;
      }

      .header-dropdown-menu {
        background: #25272a;
        border-radius: 8px;
        width: 267px;
      }

      .dropdown-arrow {
        margin-left: 9px;
      }

      .show > .dropdown-toggle > .dropdown-arrow {
        transform: rotate(180deg);
      }

      .show > .btn-primary.dropdown-toggle:focus {
        box-shadow: none;
      }

      .btn-primary:focus {
        box-shadow: none;
      }
    `}</style>
  </Dropdown>
);