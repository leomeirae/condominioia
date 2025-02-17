import { Pipe } from '@baseai/core';
import { NextRequest } from 'next/server';
import pipeConciergeAi from '../../../../../../baseai/pipes/concierge-ai';

export async function POST(req: NextRequest) {
    const runOptions = await req.json();

    // 1. Initiate the Pipe.
    const pipe = new Pipe(pipeConciergeAi());

    // 2. Run the pipe
    const result = await pipe.run(runOptions);

    // 3. Return the response stringified.
    return new Response(JSON.stringify(result));
} 