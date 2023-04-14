const Footer = () => {
    const year = new Date().getFullYear();
    return ( 
        <footer className="footer">
            <p>&copy; {year} made with &hearts; By ROMs</p>
        </footer>
     );
}
 
export default Footer;