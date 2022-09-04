import {
  acceptInvitation,
  CancelInvitation,
  RevokeInvitation,
  rejectInvitation,
} from "../../../services/invitation.server";

export default async function UpdateInvitationAPI(req, res) {
  const { id, status } = req.body;
  if (status === "ACCEPTED") {
    await acceptInvitation({ id }).then((result) => {
      res.status(200).json({ status: 200, message: result });
    });
    return;
  } else if (status === "REJECTED") {
    await rejectInvitation({ id }).then((result) => {
      res.status(200).json({ status: 200, message: result });
    });
    return;
  } else if (status === "CANCELLED") {
    await CancelInvitation({ id }).then((result) => {
      res.status(200).json({ status: 200, message: result });
    });
    return;
  } else if (status === "REVOKED") {
    await RevokeInvitation({ id }).then((result) => {
      res.status(200).json({ status: 200, message: result });
    });
    return;
  }
}
