import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Popover from "@material-ui/core/Popover";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import useFetch from "use-http";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  leaf: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: "300px",
  },

  topLevelFilter: {
    borderRadius: 0,
  },
}));

const Loading = () => <CircularProgress />;
const NestedExpansionPanel = ({ label, children, classes }) =>
  children ? (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        <FormControlLabel
          aria-label="Acknowledge"
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          control={<Checkbox />}
          label={label}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        classes={{
          root: classes.leaf,
        }}
      >
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ) : (
    <div>
      <FormControlLabel
        aria-label="Acknowledge"
        onClick={(event) => event.stopPropagation()}
        onFocus={(event) => event.stopPropagation()}
        control={<Checkbox />}
        label={label}
      />
    </div>
  );

const TopLevelFilter = ({ label, nestedFilters, classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Chip
        color="primary"
        deleteIcon={<ExpandMoreIcon />}
        onDelete={handleClick}
        style={{ margin: "10px", marginLeft: "1px", marginRight: "1px" }}
        aria-describedby={`${id}_${label}`}
        clickable={false}
        classes={{ root: classes.topLevelFilter }}
        label={
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label={label}
          />
        }
      />

      <Popover
        id={`${id}_${label}`}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        style={{
          maxWidth: "50%",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {nestedFilters.map(({ label, children }) => (
          <NestedExpansionPanel
            key={label}
            label={label}
            classes={classes}
            children={children.map(({ label }) => (
              <NestedExpansionPanel
                classes={classes}
                key={label}
                label={label}
              />
            ))}
          />
        ))}
      </Popover>
    </div>
  );
};

function Filters() {
  const classes = useStyles();

  const { loading, error, data } = useFetch(
    "http://localhost:3000/available_filters",
    {},
    []
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Typography style={{ margin: "10px" }} color="secondary">
        Error loading filters...
      </Typography>
    );
  }

  return (
    <div className={classes.root}>
      {data.map(({ name: label, factions }) => {
        return (
          <TopLevelFilter
            classes={classes}
            key={label}
            label={label}
            nestedFilters={factions.map((faction) => ({
              label: faction.name,
              children: [],
              children: faction.races.map((race) => ({ label: race.name })),
            }))}
          />
        );
      })}
    </div>
  );
}

export default Filters;