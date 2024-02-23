import { NextRequest, NextResponse } from "next/server";
import { z, ZodSchema } from "zod";

export function zValidation<T extends ZodSchema>(
  schema: T,
  next: (
    req: Omit<NextRequest, "query" | "body"> & { v: z.infer<T> },
    res: NextResponse
  ) => unknown | Promise<unknown>
) {
  return async (req: NextRequest, res: NextResponse) => {
    const { searchParams } = new URL(req.url);
    let data = {};
    if (req.method === "GET") {
      data = Object.fromEntries(searchParams.entries());
    }
    if (req.method === "POST") {
      data = await req.json();
    }

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json(
        { message: JSON.parse(parsed.error.message) },
        { status: 400 }
      );
    }
    // @ts-ignore
    req = { ...req, v: parsed.data };
    // @ts-ignore
    return next(req, res);
  };
}
