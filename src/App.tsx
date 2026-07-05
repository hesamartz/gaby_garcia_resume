import {
	EmailRounded,
	SchoolRounded,
	WorkRounded,
	PsychologyRounded,
	InterestsRounded,
	AssignmentIndRounded,
	PhoneAndroidRounded,
	CakeRounded,
} from "@mui/icons-material";

import "./App.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";
import { Avatar } from "@mui/material";

const PROFILE_IMAGE = "src/assets/bg-profile-001.png";
const mail = "gaby.garcia.ramirez12@gmail.com";
const phoneNumber = "(55) 2940-1573";
const address = "Ciudad Azteca 1a Sección, Ecatepec de Morelos, Estado de México, C.P. 55120";
const rfc = "GARG770812T95";
const socialNumber = "1895771808-5";
const birthDate = new Date("1977-08-12");
const birthDateFormat = birthDate.toLocaleDateString('es-MX', {
	day: '2-digit',
	month: 'long',
	year: 'numeric',
});

function App() {
	return (
		<Box className="cv-page">
			<Box className="cv-container">
				{/* LEFT SIDEBAR */}
				<Box className="cv-sidebar">
					<Box className="profile-photo-wrap">
						<Box
							component="img"
							src={PROFILE_IMAGE}
							alt="Foto de Gabriela García Ramírez"
							className="profile-photo"
						/>
					</Box>

					<Box className="sidebar-section">
						<Typography className="sidebar-title">Contacto</Typography>
						<Box className="contact-item">
							<PhoneAndroidRounded />
							<Chip
								variant="filled"
								color="default"
								sx={{
									width: "fit-content",
									maxWidth: "100%",
									height: "auto",
									alignItems: "flex-start",
									py: 0.75,
									color: "whitesmoke",

									"& .MuiChip-icon": {
										mt: "4px",
									},

									"& .MuiChip-label": {
										display: "block",
										whiteSpace: "normal",
										overflow: "visible",
										textOverflow: "unset",
										lineHeight: 1.35,
										py: 0.25,
									},
								}}
								label={phoneNumber}
							/>
						</Box>

						<Box className="contact-item">
							<EmailRounded />
							<Chip
								variant="filled"
								color="default"
								sx={{
									width: "fit-content",
									maxWidth: "100%",
									height: "auto",
									alignItems: "flex-start",
									py: 0.75,
									color: "whitesmoke",

									"& .MuiChip-icon": {
										mt: "4px",
									},

									"& .MuiChip-label": {
										display: "block",
										whiteSpace: "normal",
										overflow: "visible",
										textOverflow: "unset",
										lineHeight: 1.35,
										py: 0.25,
									},
								}}
								label={mail}
							/>
						</Box>
					</Box>

					<Box className="sidebar-section">
						<Typography className="sidebar-title">Ubicación</Typography>
						<Box className="contact-item">
								<LocationOnRounded />
								<Chip
									variant="filled"
									color="default"
									label={address}
									sx={{
										width: "fit-content",
										maxWidth: "100%",
										height: "auto",
										alignItems: "flex-start",
										py: 0.75,
										color: "whitesmoke",

										"& .MuiChip-icon": {
											mt: "4px",
										},

										"& .MuiChip-label": {
											display: "block",
											whiteSpace: "normal",
											overflow: "visible",
											textOverflow: "unset",
											lineHeight: 1.35,
											py: 0.25,
										},
									}}
								/>
						</Box>
					</Box>

					<Box className="sidebar-section">
						<Typography className="sidebar-title">Información personal</Typography>
						<Box className="contact-item">
							<CakeRounded />
							<Chip
								variant="filled"
								color="default"
								sx={{
									width: "fit-content",
									maxWidth: "100%",
									height: "auto",
									alignItems: "flex-start",
									py: 0.75,
									color: "whitesmoke",

									"& .MuiChip-icon": {
										mt: "4px",
									},

									"& .MuiChip-label": {
										display: "block",
										whiteSpace: "normal",
										overflow: "visible",
										textOverflow: "unset",
										lineHeight: 1.35,
										py: 0.25,
									},
								}}
								label={birthDateFormat}
							/>
						</Box>

						<Box className="contact-item">
								<Avatar
									variant="rounded"
									sx={{
										width: 32,
										height: 20,
										fontSize: "medium",
										fontWeight: "bold",
										bgcolor: "transparent"
									}}
								>
									RFC
								</Avatar>
								<Chip
								variant="filled"
								color="default"
								sx={{
									width: "fit-content",
									maxWidth: "100%",
									height: "auto",
									alignItems: "flex-start",
									py: 0.75,
									color: "whitesmoke",

									"& .MuiChip-icon": {
										mt: "4px",
									},

									"& .MuiChip-label": {
										display: "block",
										whiteSpace: "normal",
										overflow: "visible",
										textOverflow: "unset",
										lineHeight: 1.35,
										py: 0.25,
									},
								}}
									label={rfc}
								/>
						</Box>

						<Box className="contact-item">
							<Avatar
								variant="rounded"
								sx={{
									width: 32,
									height: 20,
									fontSize: "medium",
									fontWeight: "bold",
									bgcolor: "transparent"
								}}
							>
								NSS
							</Avatar>
							<Chip
								variant="filled"
								color="default"
								sx={{
									width: "fit-content",
									maxWidth: "100%",
									height: "auto",
									alignItems: "flex-start",
									py: 0.75,
									color: "whitesmoke",

									"& .MuiChip-icon": {
										mt: "4px",
									},

									"& .MuiChip-label": {
										display: "block",
										whiteSpace: "normal",
										overflow: "visible",
										textOverflow: "unset",
										lineHeight: 1.35,
										py: 0.25,
									},
								}}
								label={socialNumber}
							/>
						</Box>


					</Box>

					<Divider className="sidebar-divider" />

					<Box className="sidebar-section">
						<Typography className="sidebar-title">Perfil</Typography>
						<Typography className="sidebar-text">
							Profesional administrativa con trayectoria en procesos contables-administrativos. Destaco por mi organización, trabajo en equipo, capacidad de aprendizaje continuo y orientación al cliente.
						</Typography>
					</Box>

					<Divider className="sidebar-divider" />

					<Box className="sidebar-section">
						<Typography className="sidebar-title">Habilidades</Typography>

						<Box className="chip-list">
							<Chip label="Atención al cliente" />
							<Chip label="Organización" />
							<Chip label="Comunicación" />
							<Chip label="Trabajo en equipo" />
							<Chip label="Administración" />
							<Chip label="Actitud de Servicio" />
							<Chip label="Superación personal" />
							<Chip label="Habilidad para el trato con el público" />
							<Chip label="Uso de plataformas digitales" />
							<Chip label="Uso de Copiadora" />
							<Chip label="Uso de Fax" />
						</Box>
					</Box>
				</Box>

				{/* MAIN CONTENT */}
				<Box className="cv-main">
					<Box className="header-section">
						<Typography component="h1" className="candidate-name">
							Gabriela García Ramírez
						</Typography>

						<Typography className="candidate-role">
							Auxiliar administrativo · Atención al cliente · Soporte operativo
						</Typography>
					</Box>

					<Box className="content-section objective-card">
						<Typography className="section-title">
							Objetivo profesional
						</Typography>

						<Typography className="section-text">
							Consolidar mi trayectoria en el área contable-administrativa, aportando experiencia en control documental, facturación y atención al público. Busco contribuir con orden, responsabilidad y compromiso al cumplimiento de los objetivos organizacionales.
						</Typography>
					</Box>

					<Box className="content-section">
						<Box className="section-heading">
							<Avatar sx={{ bgcolor: "whitesmoke" }}>
								<SchoolRounded />
							</Avatar>
							<Typography className="section-title">Educación</Typography>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">
									Centro de Estudios Tecnológicos Industrial y de Servicios No. 54
								</Typography>
								<Typography className="item-subtitle">
									Técnico en Contabilidad · 2014 - 2016
								</Typography>
								<Typography className="section-text">
									Formación técnica enfocada en registros financieros, conciliaciones y administración contable.
								</Typography>
							</Box>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">
									Instituto Carlson Chester F.
								</Typography>
								<Typography className="item-subtitle">
									Carrera Comercial en Computación · 1992 - 1996
								</Typography>
								<Typography className="section-text">
									Estudios orientados al uso de herramientas informáticas, paquetería de oficina y soporte administrativo.
								</Typography>
							</Box>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">
									Escuela Secundaria Técnica No. 50
								</Typography>
								<Typography className="item-subtitle">
									Secundaria (Certificado) · 1989 - 1992
								</Typography>
							</Box>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">
									Ignacio Rodríguez Galván
								</Typography>
								<Typography className="item-subtitle">
									Primaria (Certificado) · 1983 - 1989
								</Typography>
							</Box>
						</Box>

					</Box>

					<Box className="content-section">
						<Box className="section-heading">
							<Avatar sx={{ bgcolor: "whitesmoke" }}>
								<PsychologyRounded />
							</Avatar>
							<Typography className="section-title">
								Competencias principales
							</Typography>
						</Box>

						<Box className="skills-grid">
							<Box className="skill-card">
								<Typography className="skill-title">
									Habilidades administrativas
								</Typography>
								<Typography className="section-text">
									Soporte contable y administrativo en diversos sectores. Control documental de expedientes, facturación, manejo de caja, conciliaciones contables y excelente atención al público.
								</Typography>
							</Box>

							<Box className="skill-card">
								<Typography className="skill-title">
									Habilidades digitales
								</Typography>
								<Typography className="section-text">
									SIA, Quiter AutoWeb, SAE 4.0, Paquete C2K (Control 2000), Sistema NOI, Sistema COI, Pago de SUA, IMSS, Microsoft Office, Microsoft Outlook, Facturación e Inventarios SAE.
								</Typography>
							</Box>
						</Box>
					</Box>

					<Box className="content-section">
						<Box className="section-heading">
							<Avatar sx={{ bgcolor: "whitesmoke" }}>
								<WorkRounded />
							</Avatar>
							<Typography className="section-title">Experiencia</Typography>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">Grupo ACC La Villa SA de CV</Typography>
								<Typography className="item-subtitle">
									Auxiliar contable · 2023 - 2025
								</Typography>
								<Typography variant="body2" sx={{ fontSize: "13px", color: "#60737b", mt: -0.5, mb: 1, fontStyle: "italic" }}>
									Jefe inmediato: Cristina Montiel — Tel. (55) 5102-1780
								</Typography>
								<ul className="experience-list">
									<li>Registro contable de operaciones y conciliaciones bancarias.</li>
									<li>Gestión administrativa mediante sistemas Quiter y SIA.</li>
									<li>Facturación y control de ingresos/egresos de la agencia.</li>
								</ul>
							</Box>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">Nacional de Botanas, SA de CV</Typography>
								<Typography className="item-subtitle">
									Auxiliar contable · 2022 - 2023
								</Typography>
								<Typography variant="body2" sx={{ fontSize: "13px", color: "#60737b", mt: -0.5, mb: 1, fontStyle: "italic" }}>
									Jefe inmediato: Aidé Gómez — Tel. (55) 8837-0840
								</Typography>
								<ul className="experience-list">
									<li>Captura de pólizas contables e información para declaración de impuestos.</li>
									<li>Control y comprobación de gastos de la empresa.</li>
									<li>Apoyo en elaboración de estados financieros y reportes administrativos.</li>
								</ul>
							</Box>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">Autos Lacite, SA de CV</Typography>
								<Typography className="item-subtitle">
									Cajera administrativa · 2022
								</Typography>
								<Typography variant="body2" sx={{ fontSize: "13px", color: "#60737b", mt: -0.5, mb: 1, fontStyle: "italic" }}>
									Jefe inmediato: Linda Martínez García — Tel. (55) 1583-4630
								</Typography>
								<ul className="experience-list">
									<li>Recepción y control de pagos (efectivo, transferencias y terminales bancarias).</li>
									<li>Facturación y arqueos de caja diaria en agencia automotriz.</li>
									<li>Control administrativo de expedientes vehiculares y trámites de unidades.</li>
								</ul>
							</Box>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">Despacho Contable, Asesoría Integral</Typography>
								<Typography className="item-subtitle">
									Auxiliar Contable · 2010 - 2018
								</Typography>
								<Typography variant="body2" sx={{ fontSize: "13px", color: "#60737b", mt: -0.5, mb: 1, fontStyle: "italic" }}>
									Jefe Inmediato: Susana Mora Navarrete — Tel. (55) 3957-2665
								</Typography>
								<ul className="experience-list">
									<li>Captura de pólizas de ingresos, egresos y diario para diversos clientes.</li>
									<li>Cálculo de impuestos básicos y conciliaciones bancarias.</li>
									<li>Organización y resguardo de archivos contables y fiscales.</li>
								</ul>
							</Box>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">Integra Ingeniería S.A de C.V.</Typography>
								<Typography className="item-subtitle">
									Asistente Administrativo · 2002 - 2008
								</Typography>
								<Typography variant="body2" sx={{ fontSize: "13px", color: "#60737b", mt: -0.5, mb: 1, fontStyle: "italic" }}>
									Jefe Inmediato: Leonides Pizano — Tel. 6350-4864
								</Typography>
								<ul className="experience-list">
									<li>Elaboración y control de correspondencia, reportes y cotizaciones.</li>
									<li>Organización y mantenimiento de archivos físicos e información interna.</li>
									<li>Apoyo operativo al personal técnico y atención de llamadas y visitas.</li>
								</ul>
							</Box>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">Thermo J.M.</Typography>
								<Typography className="item-subtitle">
									Secretaria · 2000 - 2001
								</Typography>
								<Typography variant="body2" sx={{ fontSize: "13px", color: "#60737b", mt: -0.5, mb: 1, fontStyle: "italic" }}>
									Jefe Inmediato: Javier Martínez Ramírez — Tel. (55) 2565-4059 / 5894-0142
								</Typography>
								<ul className="experience-list">
									<li>Control de agenda de la dirección, correspondencia y llamadas telefónicas.</li>
									<li>Captura de datos, redacción de documentos y archivo general de la oficina.</li>
								</ul>
							</Box>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">Servicio y Mantenimiento Para El Transporte, S.A. de C.V.</Typography>
								<Typography className="item-subtitle">
									Secretaria – Recepcionista · 1999 - 2000
								</Typography>
								<Typography variant="body2" sx={{ fontSize: "13px", color: "#60737b", mt: -0.5, mb: 1, fontStyle: "italic" }}>
									Jefe inmediato: Ing. Ernesto Jiménez Lara — Tel. 5777-0485
								</Typography>
								<ul className="experience-list">
									<li>Atención telefónica y recepción de clientes y proveedores.</li>
									<li>Control documental de órdenes de servicio y soporte secretarial a la gerencia.</li>
								</ul>
							</Box>
						</Box>

						<Box className="timeline-item">
							<Box className="timeline-dot" />
							<Box>
								<Typography className="item-title">Mexico Transfers, S.A. de C.V.</Typography>
								<Typography className="item-subtitle">
									Capturista · 1998 - 1999
								</Typography>
								<Typography variant="body2" sx={{ fontSize: "13px", color: "#60737b", mt: -0.5, mb: 1, fontStyle: "italic" }}>
									Jefe Inmediato: Beatriz Hernández — Tel. 5662-9441
								</Typography>
								<ul className="experience-list">
									<li>Captura rápida de datos en el sistema interno de transporte.</li>
									<li>Verificación, control y archivo de la documentación de servicios y transferencias.</li>
								</ul>
							</Box>
						</Box>
					</Box>

					<Box className="bottom-grid">
						<Box className="content-section compact-section">
							<Box className="section-heading">
								<InterestsRounded />
								<Typography className="section-title">Intereses profesionales</Typography>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", gap: "6px", mt: 0.5 }}>
								{[
									"Actualización en normativa contable",
									"Atención y servicio al cliente",
									"Eficiencia y actualización en procesos administrativos",
									"Manejo de sistemas ERP y plataformas digitales",
									"Superación y desarrollo profesional continuo",
								].map((interest, i) => (
									<Box key={i} sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
										<Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: "#123c46", flexShrink: 0 }} />
										<Typography sx={{ fontSize: "14px", color: "#3d4d55", lineHeight: 1.4 }}>
											{interest}
										</Typography>
									</Box>
								))}
							</Box>
						</Box>

						<Box className="content-section compact-section">
							<Box className="section-heading">
								<AssignmentIndRounded />
								<Typography className="section-title">Referencias</Typography>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mt: 0.5 }}>
								{[
									{ name: "Hegel Saúl Martínez Corona", phone: "(55) 4313-2514" },
									{ name: "Georgina García", phone: "(55) 7373-7271" },
									{ name: "Leonides Pizano", phone: "(55) 5651-5856" },
								].map((ref, i) => (
									<Box key={i} sx={{ display: "flex", flexDirection: "column", gap: "1px", paddingLeft: "10px", borderLeft: "2px solid #d5e0e3" }}>
										<Typography sx={{ fontSize: "14.5px", fontWeight: 700, color: "#1f2933", lineHeight: 1.3 }}>
											{ref.name}
										</Typography>
										<Typography sx={{ fontSize: "13px", color: "#60737b", letterSpacing: "0.3px" }}>
											{ref.phone}
										</Typography>
									</Box>
								))}
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default App;