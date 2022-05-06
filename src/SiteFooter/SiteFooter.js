import "./SiteFooter.css";

const publishedYear = 2022;
const currentYear = new Date().getFullYear();
const copyrightYear =
  currentYear > publishedYear
    ? `${publishedYear}-${currentYear}`
    : `${publishedYear}`;

const SiteFooter = () => {
  return (
    <footer className="siteFooter">
      <p>© {copyrightYear} Tóth Marcell Ákos. All rights reserved.</p>
    </footer>
  );
};

export default SiteFooter;
