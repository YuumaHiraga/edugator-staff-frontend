import {
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Grid,
  IconButton,
  Drawer,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Box,
  Divider,
  Collapse,
  List,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ModulesIcon from "@mui/icons-material/AccountTree";
import ProjectsIcon from "@mui/icons-material/BorderColor";
import LearnIcon from "@mui/icons-material/Book";
import ScheduleIcon from "@mui/icons-material/CalendarToday";
import DefaultLogo from "../assets/DefaultLogo.svg";
import DarkModeLogo from "../assets/DarkModeLogo.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "./theme";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { Routes } from "../shared/Routes.constants";
import { adminPathRegex } from "../shared/constants";

interface Props {
  light: boolean;
  modules: string[];
  codingPage?: boolean;
}

function VerticalNavigation(props: Props) {
  const location = useLocation();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const [openProjects, setOpenProjects] = useState<any>(null);
  const [openModules, setOpenModules] = useState<any>(null);
  const [openLearn, setOpenLearn] = useState<any>(null);
  const [anchorProjects, setAnchorProjects] = useState<any>(null);
  const [anchorModules, setAnchorModules] = useState<any>(null);
  const [anchorLearn, setAnchorLearn] = useState<any>(null);
  const [open, setOpen] = useState<boolean>(false);
  interface Menu {
    title: string;
    id: string;
    icon: any;
    anchor: any;
    anchorSet: any;
    menuOpen: any;
    setMenuOpen: any;
    subitems: { title: string; link: string }[];
  }

  const toggleDrawer = () => {
    setOpen(!open);
    return 0;
  };

  const menus: Menu[] = [
    {
      title: "Modules",
      id: "modules",
      icon: <ModulesIcon sx={{ color: "primary.main" }} />,
      anchor: anchorModules,
      anchorSet: setAnchorModules,
      subitems: props.modules.map((value, index) => ({
        title: `${value}`,
        link: "",
      })),
      menuOpen: openModules,
      setMenuOpen: setOpenModules,
    },
    {
      title: "Projects",
      id: "projects",
      icon: <ProjectsIcon sx={{ color: "primary.main" }} />,
      anchor: anchorProjects,
      anchorSet: setAnchorProjects,
      menuOpen: openProjects,
      setMenuOpen: setOpenProjects,
      subitems: [
        {
          title: "Linked List",
          link: "",
        },
        {
          title: "AVL Tree",
          link: "",
        },
        {
          title: "PageRank",
          link: "",
        },
        {
          title: "Final Project",
          link: "",
        },
      ],
    },
    {
      title: "Learn",
      id: "learn",
      icon: <LearnIcon sx={{ color: "primary.main" }} />,
      anchor: anchorLearn,
      anchorSet: setAnchorLearn,
      menuOpen: openLearn,
      setMenuOpen: setOpenLearn,
      subitems: [
        {
          title: "Arrays",
          link: "",
        },
        {
          title: "Stacks",
          link: "",
        },
        {
          title: "Queues",
          link: "",
        },
        {
          title: "Heaps",
          link: "",
        },
        {
          title: "Trees",
          link: "",
        },
        {
          title: "Graphs",
          link: "",
        },
        {
          title: "DP",
          link: "",
        },
      ],
    },
  ];

  return (
    <Toolbar
      style={{
        paddingLeft: md ? 100 : 30,
        paddingRight: md ? 100 : 30,
        height: 64,
        backgroundColor: props.codingPage
          ? "white"
          : props.light
          ? "transparent"
          : "#152c7c",
      }}
    >
      {!props.codingPage && (
        <Link to={"/"}>
          <Avatar
            alt="Example Alt"
            style={{
              backgroundSize: "cover",
              width: 50,
              height: 46,
              padding: 5,
            }}
            src={props.light ? DarkModeLogo : DefaultLogo}
          />
        </Link>
      )}
      <Typography variant="h5" component="h1"></Typography>

      {md ? (
        //Expanded navigation
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          {menus.map((item, index) => {
            return (
              <div key={index}>
                <Button
                  sx={{
                    color: props.light ? "inherit" : "white",
                    marginRight: 4,
                  }}
                  aria-controls={item.id}
                  aria-haspopup="true"
                  onClick={(event) => item.anchorSet(event.currentTarget)}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  {item.title}
                </Button>
                <Menu
                  id={item.id}
                  anchorEl={item.anchor}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  keepMounted
                  open={Boolean(item.anchor)}
                  onClose={() => item.anchorSet(null)}
                >
                  {item.subitems.map((subitem, i) => {
                    return (
                      <Link
                        key={i}
                        to={{
                          pathname: adminPathRegex.test(location.pathname)
                            ? Routes.AdminCode
                            : Routes.Code,
                          state: { moduleName: subitem.title },
                        }}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <MenuItem key={i} onClick={() => item.anchorSet(null)}>
                          {subitem.title}
                        </MenuItem>
                      </Link>
                    );
                  })}
                </Menu>
              </div>
            );
          })}
          <Button
            sx={{ color: props.light ? "inherit" : "#ffffff" }}
            onClick={() => {}}
          >
            Schedule
          </Button>
        </Grid>
      ) : (
        //hamburger menu navigation
        <>
          <IconButton
            edge="start"
            style={{ color: props.light ? "black" : "white" }}
            aria-label="open drawer"
            sx={{ position: "absolute", right: 20 }}
            onClick={() => {
              toggleDrawer();
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={() => toggleDrawer()}>
            <Box
              sx={{
                p: 2,
                height: 1,
                width: 220,
                backgroundColor: "white",
              }}
            >
              <IconButton
                sx={{ mb: 2 }}
                onClick={() => {
                  toggleDrawer();
                }}
              >
                <CloseIcon />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                {menus.map((menu, index) => {
                  return (
                    <div key={index}>
                      <ListItemButton
                        key={index}
                        onClick={() => {
                          menu.setMenuOpen(!menu.menuOpen);
                        }}
                      >
                        <ListItemIcon>{menu.icon}</ListItemIcon>
                        <ListItemText primary={menu.title} />
                        {menu.menuOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={menu.menuOpen} timeout="auto" unmountOnExit>
                        {menu.subitems.map((subitem, i) => {
                          return (
                            <List key={i} component="div" disablePadding>
                              <Link
                                to={{
                                  pathname: adminPathRegex.test(
                                    location.pathname
                                  )
                                    ? Routes.AdminCode
                                    : Routes.Code,
                                  state: { moduleName: subitem.title },
                                }}
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                <ListItemButton sx={{ pl: 6 }}>
                                  <ListItemText secondary={subitem.title} />
                                </ListItemButton>
                              </Link>
                            </List>
                          );
                        })}
                      </Collapse>
                    </div>
                  );
                })}
                <ListItemButton>
                  <ListItemIcon>
                    <ScheduleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Schedule" />
                </ListItemButton>
              </Box>
            </Box>
          </Drawer>
        </>
      )}
    </Toolbar>
  );
}

export default VerticalNavigation;
