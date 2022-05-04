
function create_meeting(signature) {
    console.log(`Bearer ${signature}`);
fetch('https://api.zoom.us/v2/users/me/meetings', {
method: "Post",
headers: {
Authorization: `Bearer ${signature}`,
"Content-Type": "application/json",
},
body: JSON.stringify({
  "agenda": "My Meeting",
  "default_password": false,
  "duration": 60,
  "password": "123456",
  "pre_schedule": false,
  "recurrence": {
    "end_date_time": "2022-04-02T15:59:00Z",
    "end_times": 7,
    "monthly_day": 1,
    "monthly_week": 1,
    "monthly_week_day": 1,
    "repeat_interval": 1,
    "type": 1,
    "weekly_days": "1"
  },
  "schedule_for": "jchill@example.com",
  "settings": {
    "additional_data_center_regions": [
      "TY"
    ],
    "allow_multiple_devices": true,
    "alternative_hosts": "jchill@example.com;thill@example.com",
    "alternative_hosts_email_notification": true,
    "approval_type": 2,
    "approved_or_denied_countries_or_regions": {
      "approved_list": [
        "CX"
      ],
      "denied_list": [
        "CA"
      ],
      "enable": true,
      "method": "approve"
    },
    "audio": "telephony",
    "authentication_domains": "example.com",
    "authentication_exception": [
      {
        "email": "jchill@example.com",
        "name": "Jill Chill"
      }
    ],
    "authentication_option": "signIn_D8cJuqWVQ623CI4Q8yQK0Q",
    "auto_recording": "cloud",
    "breakout_room": {
      "enable": true,
      "rooms": [
        {
          "name": "room1",
          "participants": [
            "jchill@example.com"
          ]
        }
      ]
    },
    "calendar_type": 1,
    "close_registration": false,
    "cn_meeting": false,
    "contact_email": "jchill@example.com",
    "contact_name": "Jill Chill",
    "email_notification": true,
    "encryption_type": "enhanced_encryption",
    "focus_mode": true,
    "global_dial_in_countries": [
      "US"
    ],
    "host_video": true,
    "in_meeting": false,
    "jbh_time": 0,
    "join_before_host": false,
    "language_interpretation": {
      "enable": true,
      "interpreters": [
        {
          "email": "interpreter@example.com",
          "languages": "US,FR"
        }
      ]
    },
    "meeting_authentication": true,
    "meeting_invitees": [
      {
        "email": "jchill@example.com"
      }
    ],
    "mute_upon_entry": false,
    "participant_video": false,
    "private_meeting": false,
    "registrants_confirmation_email": true,
    "registrants_email_notification": true,
    "registration_type": 1,
    "show_share_button": true,
    "use_pmi": false,
    "waiting_room": false,
    "watermark": false
  },
  "start_time": "2022-03-25T07:32:55Z",
  "template_id": "Dv4YdINdTk+Z5RToadh5ug==",
  "timezone": "America/Los_Angeles",
  "topic": "My Meeting",
  "tracking_fields": [
    {
      "field": "field1",
      "value": "value1"
    }
  ],
  "type": 2

}),
});}