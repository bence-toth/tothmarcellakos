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
      <p>
        Huh, no annoying popups? That's right, this website doesn't use any
        cookies. We don't store any of your data. You aren't being tracked here.
      </p>
      <p>© {copyrightYear} Tóth Marcell Ákos. All rights reserved.</p>
    </footer>
  );
};

export default SiteFooter;
