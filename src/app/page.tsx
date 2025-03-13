'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Paper, IconButton, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsappFloatingButton from "@/app/WhatsappFloatingButton";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Home() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { label: "Sobre Nosotros", href: "#about" },
        { label: "Viajes", href: "#trips" },
        { label: "Próximos Viajes", href: "#next-trips" },
        { label: "Contacto", href: "#contact" }
    ];

    return (
        <Box sx={{
            minHeight: "100vh",
            backgroundImage: "url(/assets/surf-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            {/* Navbar */}
            <AppBar position="static" sx={{ backgroundColor: "black" }}>
                <Toolbar>
                    <Image
                        src="https://instagram.fubt3-1.fna.fbcdn.net/v/t51.2885-19/465139448_1617668455773947_216651395761797997_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fubt3-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2AHkAzZTSUI-4ySjqep4aNoMBJFkXN-WY4qU_04SbNCasPW-gI1Xrf3FR03p5_vjuGAltimTInVjmk-4hY4Y7Vjw&_nc_ohc=F8sT3luCcS4Q7kNvgHhWy3P&_nc_gid=4b013f1aa6c847bbb33c6f43105e6b57&edm=AEYEu-QBAAAA&ccb=7-5&oh=00_AYHskEA-i4SX7bDLQ-TPslAjpHHzeuE4qTprxjpoHlZAfg&oe=67D8E471&_nc_sid=ead929"
                        alt="Real Fun Wave Logo"
                        width={50}
                        height={50}
                        style={{ borderRadius: "50%", marginRight: "10px" }}
                    />
                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600, color: "white" }}>
                        Real Fun Wave
                    </Typography>

                    {/* Menú Desktop */}
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        {menuItems.map((item) => (
                            <Button key={item.href} color="inherit" component={Link} href={item.href} sx={{ color: "white" }}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Menú Móvil */}
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: "block", md: "none" }, color: "white" }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer para móviles */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    "& .MuiDrawer-paper": {
                        backgroundColor: "black",
                        color: "white",
                        width: 250,
                    },
                }}
            >
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.href} disablePadding>
                            <ListItemButton component={Link} href={item.href} sx={{ color: "white" }} onClick={handleDrawerToggle}>
                                {item.label}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Hero Section */}
            <Box sx={{ position: "relative", height: "500px", backgroundImage: "url(/surf-hero.jpg)", backgroundSize: "cover", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textAlign: "center", p: 4 }}>
                <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px" }}>
                    <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "'Roboto', sans-serif", color: "white" }}>Explora los Mejores Destinos de Surf</Typography>
                    <Typography variant="h6" mt={2} sx={{ fontFamily: "'Roboto', sans-serif", color: "white" }}>Viaja con nosotros y descubre olas perfectas alrededor del mundo</Typography>
                </Box>
            </Box>

            <Container>
                {/* About Section */}
                <Box id="about" textAlign="center" py={6}>
                    <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "'Pacifico', cursive", color: "white" }}>
                        Sobre Nosotros
                    </Typography>
                    <Typography variant="h6" mt={2} sx={{ fontFamily: "'Quicksand', sans-serif", fontSize: "1.3rem", maxWidth: "800px", mx: "auto", lineHeight: "1.8", color: "white" }}>
                        Amamos el surf y queremos compartir esa pasión contigo. Organizamos surf trips a destinos paradisíacos,
                        te enseñamos a dominar las olas y te sumergimos en una experiencia que va más allá del deporte. ¡Vive el surf al máximo con nosotros!
                    </Typography>

                </Box>

                {/* Trips Section */}
                <Box id="trips" textAlign="center" py={6}>
                    <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "'Roboto', sans-serif", color: "white" }}>Nuestros Viajes</Typography>
                    <Grid container spacing={3} mt={3}>
                        {["bali.jpg", "costarica.jpg", "hawaii.jpg"].map((img, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper sx={{ p: 3, backgroundColor: "black" }}>
                                    <Image src={`/assets/${img}`} alt={img.split(".")[0]} width={300} height={200} style={{ borderRadius: "8px" }} />
                                    <Typography variant="h6" mt={2} sx={{ fontFamily: "'Roboto', sans-serif", color: "white" }}>{img.split(".")[0].replace("-", " ")}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Next Trips Section */}
                <Box id="next-trips" textAlign="center" py={6} bgcolor="black">
                    <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "'Roboto', sans-serif", color: "white" }}>Próximos Viajes</Typography>
                    <Grid container spacing={3} mt={3}>
                        {["Maldivas - Abril 2025", "Australia - Julio 2025"].map((trip, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Paper sx={{ p: 3, backgroundColor: "#333" }}>
                                    <Typography variant="h6" sx={{ fontFamily: "'Roboto', sans-serif", color: "white" }}>{trip}</Typography>
                                    <Typography sx={{ fontFamily: "'Roboto', sans-serif", color: "white" }}>Reserva tu lugar y disfruta de las mejores olas en el paraíso.</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            {/* Contact Section */}
            <Box id="contact" textAlign="center" py={6}>
                <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "'Roboto', sans-serif", color: "white" }}>Contáctanos</Typography>
                <Typography variant="body1" mt={2} sx={{ fontFamily: "'Roboto', sans-serif", color: "white" }}>Escríbenos para planear tu próximo viaje de surf.</Typography>
            </Box>

            {/* WhatsApp Button */}
            <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
                <WhatsappFloatingButton />
            </Box>

            {/* Footer con redes sociales */}
            <Box sx={{ backgroundColor: "#111", color: "white", textAlign: "center", py: 3, mt: 4 }}>
                <Typography variant="h6" sx={{ fontFamily: "'Roboto', sans-serif" }}>Síguenos en nuestras redes</Typography>
                <Box mt={1}>
                    <IconButton
                        href="https://www.instagram.com/realfunwave/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "white" }}
                    >
                        <InstagramIcon fontSize="large" />
                    </IconButton>
                </Box>
                <Typography variant="body2" sx={{ mt: 2, fontFamily: "'Roboto', sans-serif" }}>
                    © {new Date().getFullYear()} Real Fun Wave. Todos los derechos reservados.
                </Typography>
            </Box>
        </Box>
    );
}