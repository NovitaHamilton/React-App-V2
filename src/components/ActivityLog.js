import { useEffect, useState } from 'react';
import ActivityItem from './ActivityItem';

function ActivityLog({ activities, onDeleteActivity }) {
  const [filterStartDate, setFilterStartDate] = useState();
  const [filterEndDate, setFilterEndDate] = useState();
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    // Update filter activities when filter dates change
    filterActivities();
  }, [filterStartDate, filterEndDate, activities]);

  const filterActivities = () => {
    // Today's date in ISO format 'YYYY-MM-DD'
    const today = new Date().toISOString().split('T')[0];

    // If no start and end date set, show today's activity
    if (!filterStartDate && !filterEndDate) {
      setFilteredActivities(
        activities.filter((activity) => activity.date === today)
      );
    } else {
      // If the start date is set, filter by start date
      const startDateFiltered = filterStartDate
        ? activities.filter((activity) => activity.date >= filterStartDate)
        : activities;

      // If the end date is set, filter by end date
      const endDateFiltered = filterEndDate
        ? startDateFiltered.filter((activity) => activity.date <= filterEndDate)
        : startDateFiltered;

      setFilteredActivities(endDateFiltered);
    }
  };

  return (
    <div>
      <label>
        Start Date:
        <input
          type="date"
          value={filterStartDate || ''}
          onChange={(e) => setFilterStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={filterEndDate || ''}
          onChange={(e) => setFilterEndDate(e.target.value)}
        />
      </label>
      {filteredActivities.map((activity) => (
        <ActivityItem
          key={activity.id}
          activity={activity}
          onDeleteActivity={onDeleteActivity}
        />
      ))}
      ;
    </div>
  );
}

export default ActivityLog;
