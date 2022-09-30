import { ironOptions } from "../../../lib/ironOptions";
import { withIronSessionApiRoute } from "iron-session/next";
import { createTeam } from "../../../services/events.server";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdef");
export default withIronSessionApiRoute(RegisterTeam, ironOptions);

async function RegisterTeam(req, res) {
  const body = await req.body;
  const teamId = nanoid(8);
  const response = await createTeam({
    teamDetails: {
      teamId: teamId,
      registeredById: body.teamDetails.registeredById,
      eventId: body.teamDetails.eventId,
    },
    // add teamId to teamMembers
    teamMembers: body.teamMembers.map((member) => ({
      ...member,
      teamId: teamId,
    })),
  });

  res.send({ status: 200, message: JSON.stringify(response) });
}
