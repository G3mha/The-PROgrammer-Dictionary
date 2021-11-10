second = moment().second();
minute = moment().minute() * 60 + second;
hour = moment().hour() * 3600 + minute;

secString = -second + "s";
minString = -minute + "s";
hourString = -hour + "s";

$(".seconds").css("animation-delay", secString);
$(".minute").css("animation-delay", minString);
$(".hour").css("animation-delay", hourString);