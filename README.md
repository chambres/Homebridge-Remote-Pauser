# Homebridge-Remote-Pauser
This script is able to pause your **Windows** media with Homebridge, using cmdswitch2. (No other OS will work).

To begin, install Node.js, Homebridge, and the [cmdswitch2](https://github.com/luisiam/homebridge-cmdswitch2) plugin.

For Python:
Install [winsdk](https://pypi.org/project/winsdk/): `pip install winsdk`.

For Node:
Install [node-media-controller](https://www.npmjs.com/package/node-media-controller).
Install [Diet](https://www.npmjs.com/package/diet), a minimal web server.

After that, use [forever](https://www.npmjs.com/package/forever) to run `app.js` and keep it running in the background.

Then in Homebridge, under the `cmdswitch2` config, add the following JSON:

```
"switches":  [
		{
			"name":  "Computer Audio System",
			"on_cmd":  "curl \"http://localhost:8000/\"",
			"off_cmd":  "curl \"http://localhost:8000\"",
			"state_cmd":  "powershell (Invoke-WebRequest 'http://localhost:8000/status/').Content | FindStr \"1\"",
			"manufacturer":  "chambres"

		}

]
```

Thus, your JSON for cmdswitch2 should look something like this:
```
{
    "platform": "cmdSwitch2",
    "name": "cmdSwitch2",
    "switches": [
        {
            "name":  "Computer Audio System",
			"on_cmd":  "curl \"http://localhost:8000/\"",
			"off_cmd":  "curl \"http://localhost:8000\"",
			"state_cmd":  "powershell (Invoke-WebRequest 'http://localhost:8000/status/').Content | FindStr \"1\"",
			"manufacturer":  "chambres"
        }
    ]
}
```