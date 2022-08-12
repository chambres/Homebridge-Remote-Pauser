import sys

async def mediaIs(state):
    from winsdk.windows.media.control import GlobalSystemMediaTransportControlsSessionManager as MediaManager
    import asyncio, winsdk.windows.media.control as wmc
    sessions = await MediaManager.request_async()
    session = sessions.get_current_session()
    if session == None:
        return False
        
    return int(int(wmc.GlobalSystemMediaTransportControlsSessionPlaybackStatus[state]) == session.get_playback_info().playback_status)

import asyncio
print(asyncio.run(mediaIs("PLAYING")))