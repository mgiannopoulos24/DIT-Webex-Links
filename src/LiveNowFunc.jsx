const getDayOfWeek = (dayName) => {
    console.log(`Getting day index for: ${dayName}`);
    const index = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'].indexOf(dayName);
    console.log(`Day index: ${index}`);
    return index;
  };



export const isLiveNowForItem = (scheduleItem) => {
    const dayPart = scheduleItem.split(' ')[0];
    const timePart = scheduleItem.split(' ').slice(1).join(' ');
  
    const dayOfWeek = getDayOfWeek(dayPart);
    if (dayOfWeek === -1) {
      console.error(`Day not recognized: ${dayPart}`);
      return false;
    }
  
    const [startTime, endTime] = timePart.split('-').map(time => time.trim());
    const currentDate = new Date();  
    const currentDay = currentDate.getDay();
    const [startHour, startMinute] = startTime.split(':').map(num => parseInt(num, 10));
    const [endHour, endMinute] = endTime.split(':').map(num => parseInt(num, 10));
  
    const startDate = new Date(currentDate);
    startDate.setHours(startHour, startMinute, 0, 0);
  
    const endDate = new Date(startDate);
    endDate.setHours(endHour, endMinute, 0, 0);
  
    if (dayOfWeek !== currentDay) {
      return false; // If the day of week doesn't match today, it's not live.
    }
  
    console.log(`Current Day: ${currentDay}, Lesson Day: ${dayOfWeek}`);
    console.log(`Current Time: ${currentDate.toString()}, Start Time: ${startDate.toString()}, End Time: ${endDate.toString()}`);
  
    return currentDate >= startDate && currentDate <= endDate;
  };

